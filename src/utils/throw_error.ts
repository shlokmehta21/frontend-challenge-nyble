import * as Sentry from '@sentry/react';

const throw_error = (err: any) => {
  if (process.env.environment == 'development') {
    throw new Error(err);
  } else {
    Sentry.captureException(err);
  }
};

export default throw_error;
