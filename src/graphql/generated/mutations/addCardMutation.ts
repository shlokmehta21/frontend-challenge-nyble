import { ApolloClient, gql } from '@apollo/client';
import { PaymentMethod, ErrorResponse } from '../serverModel';
import { PaymentMethodFragment, ErrorResponseFragment } from '../fragments';

export interface PaymentMethodResponse {
  success: boolean;
  data?: PaymentMethod;
  error?: ErrorResponse;
}
export interface AddCardInput {
  token_id: string;
  stripe_radar_session_id?: string;
}


const addCardGqlString = gql`
  ${PaymentMethodFragment()}
  ${ErrorResponseFragment()}
  mutation AddCard($data: AddCardInput!) {
    addCard(input: $data) {
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
const sendAddCardMutation = (
  apolloClient: ApolloClient<object>,
  inputData: AddCardInput,
): Promise<{ data: { addCard: PaymentMethodResponse} }> => {
  return apolloClient.mutate({
    mutation: addCardGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { addCard: PaymentMethodResponse} }>;
};

export default sendAddCardMutation
