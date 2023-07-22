import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}
export interface UpgradeToBoost4MonthsInput {
  subscription_id: string;
}


const upgradeToBoost4MonthsGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation UpgradeToBoost4Months($data: UpgradeToBoost4MonthsInput!) {
    upgradeToBoost4Months(input: $data) {
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
const sendUpgradeToBoost4MonthsMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpgradeToBoost4MonthsInput,
): Promise<{ data: { upgradeToBoost4Months: SubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: upgradeToBoost4MonthsGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { upgradeToBoost4Months: SubscriptionResponse} }>;
};

export default sendUpgradeToBoost4MonthsMutation
