import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface CancelSubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}


const cancelSubscriptionGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation CancelSubscription {
    cancelSubscription {
      success
      data {
        ...SubscriptionFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendCancelSubscriptionMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { cancelSubscription: CancelSubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: cancelSubscriptionGqlString,
  }) as Promise<{ data: { cancelSubscription: CancelSubscriptionResponse} }>;
};

export default sendCancelSubscriptionMutation
