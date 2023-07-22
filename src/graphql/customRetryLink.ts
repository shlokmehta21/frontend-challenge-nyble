import { ApolloLink, Operation, FetchResult, NextLink } from '@apollo/client';
import { Observable } from '@apollo/client';
import {
  DelayFunction,
  DelayFunctionOptions,
  buildDelayFunction,
} from '@apollo/client/link/retry/delayFunction';
import { ERROR_CODES } from './errorCodes';

class RetryTimeoutError extends Error {
  constructor() {
    super('Retries timed out');
    this.name = 'Retry Timeout Error';
  }
}

/**
 * Tracking and management of operations that may be (or currently are) retried.
 */
class RetryableOperation<TValue = any> {
  private retryCount: number = 0;
  private idempotentRetryCount: number = 0;
  private values: any[] = [];
  private error: any;
  private complete = false;
  private canceled = false;
  private observers: (ZenObservable.Observer<TValue> | null)[] = [];
  private currentSubscription: ZenObservable.Subscription | null = null;
  private timerId: number | undefined;

  private operation: Operation;
  private nextLink: NextLink;
  private delayFor: DelayFunction;
  private maxErrorRetryTimes: number;
  private retryTimeout: number;
  private currentlyRetrying: boolean;
  private maxIdempotentRetryInterval: number;

  private startTime: Date;

  constructor(
    operation: Operation,
    nextLink: NextLink,
    delayFor: DelayFunction,
    maxErrorRetryTimes: number,
    retryTimeout: number,
    maxIdempotentRetryInterval: number
  ) {
    this.operation = operation;
    this.nextLink = nextLink;
    this.delayFor = delayFor;
    this.maxErrorRetryTimes = maxErrorRetryTimes;
    this.retryTimeout = retryTimeout;
    this.currentlyRetrying = false;
    this.maxIdempotentRetryInterval = maxIdempotentRetryInterval;
    this.startTime = new Date();
  }

  /**
   * Register a new observer for this operation.
   *
   * If the operation has previously emitted other events, they will be
   * immediately triggered for the observer.
   */
  public subscribe(observer: ZenObservable.Observer<TValue>) {
    if (this.canceled) {
      throw new Error(`Subscribing to a retryable link that was canceled is not supported`);
    }
    this.observers.push(observer);

    // If we've already begun, catch this observer up.
    for (const value of this.values) {
      observer.next!(value);
    }

    if (this.complete) {
      observer.complete!();
    } else if (this.error) {
      observer.error!(this.error);
    }
  }

  /**
   * Remove a previously registered observer from this operation.
   *
   * If no observers remain, the operation will stop retrying, and unsubscribe
   * from its downstream link.
   */
  public unsubscribe(observer: ZenObservable.Observer<TValue>) {
    const index = this.observers.indexOf(observer);
    if (index < 0) {
      throw new Error(`RetryLink BUG! Attempting to unsubscribe unknown observer!`);
    }
    // Note that we are careful not to change the order of length of the array,
    // as we are often mid-iteration when calling this method.
    this.observers[index] = null;

    // If this is the last observer, we're done.
    if (this.observers.every((o) => o === null)) {
      this.cancel();
    }
  }

  /**
   * Start the initial request.
   */
  public start() {
    if (this.currentSubscription) return; // Already started.

    this.try();
  }

  /**
   * Stop retrying for the operation, and cancel any in-progress requests.
   */
  public cancel() {
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }
    clearTimeout(this.timerId);
    this.timerId = undefined;
    this.currentSubscription = null;
    this.canceled = true;
  }

  private try() {
    this.currentSubscription = this.nextLink(this.operation).subscribe({
      next: this.onNext,
      error: this.onError,
      complete: this.onComplete,
    });
  }

  private getNextIdempotentRetryDelay() {
    return Math.min(this.maxIdempotentRetryInterval, Math.pow(2, this.idempotentRetryCount) * 1000);
  }

  private onNext = (value: any) => {
    this.values.push(value);
    // If we get an idempotency in flight error, delay for some time then retry
    let innerData = value.data[Object.keys(value.data)[0]];
    if (innerData.error && innerData.error.code == ERROR_CODES.RequestInFlight) {
      const timeElapsed = new Date().getTime() - this.startTime.getTime();
      if (timeElapsed < this.retryTimeout) {
        this.scheduleRetry(this.getNextIdempotentRetryDelay());
        this.idempotentRetryCount += 1;
        return;
      } else {
        this.onError(new RetryTimeoutError());
      }
    }
    this.currentlyRetrying = false;

    for (const observer of this.observers) {
      if (!observer) continue;
      observer.next!(value);
    }
  };

  private onComplete = () => {
    if (this.currentlyRetrying) {
      return;
    }
    this.complete = true;
    for (const observer of this.observers) {
      if (!observer) continue;
      observer.complete!();
    }
  };

  private shouldRetryNetworkError = (count: number, operation: Operation, error: any) => {
    if (count >= this.maxErrorRetryTimes) return false;
    return !!error;
  };

  private onError = async (error: any) => {
    this.retryCount += 1;
    const shouldRetry = this.shouldRetryNetworkError(this.retryCount, this.operation, error);

    // Should we retry?
    if (shouldRetry && !(error instanceof RetryTimeoutError)) {
      this.scheduleRetry(this.delayFor(this.retryCount, this.operation, error));
      return;
    }

    this.error = error;
    for (const observer of this.observers) {
      if (!observer) continue;
      observer.error!(error);
    }
  };

  private scheduleRetry = (delay: number) => {
    this.currentlyRetrying = true;
    if (this.timerId) {
      throw new Error(`RetryLink BUG! Encountered overlapping retries`);
    }

    this.timerId = (setTimeout(() => {
      this.timerId = undefined;
      this.try();
    }, delay) as any) as number;
  };
}

class CustomRetryLink extends ApolloLink {
  /*
    Custom retry link to handle network errors as well as idempotency errors
  */

  private delayFor: DelayFunction;
  private maxErrorRetryTimes: number;
  private retryTimeout: number;
  private maxIdempotentRetryInterval: number;

  constructor() {
    super();
    const delayOptions: DelayFunctionOptions = {
      initial: 350,
      max: 2000,
      jitter: true,
    };
    this.delayFor = buildDelayFunction(delayOptions);
    this.maxErrorRetryTimes = 3;
    this.retryTimeout = 600000;
    this.maxIdempotentRetryInterval = 15000;
  }

  public request(operation: Operation, nextLink: NextLink): Observable<FetchResult> {
    const retryable = new RetryableOperation(
      operation,
      nextLink,
      this.delayFor,
      this.maxErrorRetryTimes,
      this.retryTimeout,
      this.maxIdempotentRetryInterval
    );
    retryable.start();

    return new Observable((observer) => {
      retryable.subscribe(observer);
      return () => {
        retryable.unsubscribe(observer);
      };
    });
  }
}

export default CustomRetryLink;
