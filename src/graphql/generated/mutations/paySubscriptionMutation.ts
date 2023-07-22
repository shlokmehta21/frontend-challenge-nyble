import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}
export interface PaySubscriptionInput {
  subscrptionId: string;
}


const paySubscriptionGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation PaySubscription($data: PaySubscriptionInput!) {
    paySubscription(input: $data) {
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
const sendPaySubscriptionMutation = (
  apolloClient: ApolloClient<object>,
  inputData: PaySubscriptionInput,
): Promise<{ data: { paySubscription: SubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: paySubscriptionGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { paySubscription: SubscriptionResponse} }>;
};

export default sendPaySubscriptionMutation
