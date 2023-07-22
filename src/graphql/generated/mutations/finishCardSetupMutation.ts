import { ApolloClient, gql } from '@apollo/client';
import { PaymentMethod, ErrorResponse } from '../serverModel';
import { PaymentMethodFragment, ErrorResponseFragment } from '../fragments';

export interface PaymentMethodResponse {
  success: boolean;
  data?: PaymentMethod;
  error?: ErrorResponse;
}
export interface FinishCardSetupInput {
  setupIntentId: string;
  payment_method_intent_id?: string;
  three_ds?: boolean;
}


const finishCardSetupGqlString = gql`
  ${PaymentMethodFragment()}
  ${ErrorResponseFragment()}
  mutation FinishCardSetup($data: FinishCardSetupInput!) {
    finishCardSetup(input: $data) {
      success
      data {
        ...PaymentMethodFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendFinishCardSetupMutation = (
  apolloClient: ApolloClient<object>,
  inputData: FinishCardSetupInput,
): Promise<{ data: { finishCardSetup: PaymentMethodResponse} }> => {
  return apolloClient.mutate({
    mutation: finishCardSetupGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { finishCardSetup: PaymentMethodResponse} }>;
};

export default sendFinishCardSetupMutation
