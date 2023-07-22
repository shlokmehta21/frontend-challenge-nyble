import { gql, QueryResult, useQuery } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}

const useSubscriptionQuery = (
  subscriptionFragment = SubscriptionFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{subscription: SubscriptionResponse}> => {
  const subscriptionGqlString = gql`
    ${subscriptionFragment()}
    ${errorResponseFragment()}
    query Subscription {
      subscription {
        success
        data {
          ...SubscriptionFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{subscription: SubscriptionResponse}>(subscriptionGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useSubscriptionQuery
