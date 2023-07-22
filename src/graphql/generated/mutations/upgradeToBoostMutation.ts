import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}


const upgradeToBoostGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation UpgradeToBoost {
    upgradeToBoost {
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
const sendUpgradeToBoostMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { upgradeToBoost: SubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: upgradeToBoostGqlString,
  }) as Promise<{ data: { upgradeToBoost: SubscriptionResponse} }>;
};

export default sendUpgradeToBoostMutation
