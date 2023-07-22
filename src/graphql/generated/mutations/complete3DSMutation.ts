import { ApolloClient, gql } from '@apollo/client';
import { PaymentMethod, ErrorResponse } from '../serverModel';
import { PaymentMethodFragment, ErrorResponseFragment } from '../fragments';

export interface PaymentMethodResponse {
  success: boolean;
  data?: PaymentMethod;
  error?: ErrorResponse;
}
export interface Complete3DSInputType {
  payment_method_id: string;
}


const complete3DSGqlString = gql`
  ${PaymentMethodFragment()}
  ${ErrorResponseFragment()}
  mutation Complete3DS($data: Complete3DSInputType!) {
    complete3DS(input: $data) {
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
const sendComplete3DSMutation = (
  apolloClient: ApolloClient<object>,
  inputData: Complete3DSInputType,
): Promise<{ data: { complete3DS: PaymentMethodResponse} }> => {
  return apolloClient.mutate({
    mutation: complete3DSGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { complete3DS: PaymentMethodResponse} }>;
};

export default sendComplete3DSMutation
