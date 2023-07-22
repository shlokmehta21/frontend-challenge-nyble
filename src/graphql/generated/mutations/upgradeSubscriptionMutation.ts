import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}


const upgradeSubscriptionGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation UpgradeSubscription {
    upgradeSubscription {
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
const sendUpgradeSubscriptionMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { upgradeSubscription: SubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: upgradeSubscriptionGqlString,
  }) as Promise<{ data: { upgradeSubscription: SubscriptionResponse} }>;
};

export default sendUpgradeSubscriptionMutation
