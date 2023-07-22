import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}


const startSubscriptionGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation StartSubscription {
    startSubscription {
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
const sendStartSubscriptionMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { startSubscription: SubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: startSubscriptionGqlString,
  }) as Promise<{ data: { startSubscription: SubscriptionResponse} }>;
};

export default sendStartSubscriptionMutation
