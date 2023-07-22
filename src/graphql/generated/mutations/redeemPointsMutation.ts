import { ApolloClient, gql } from '@apollo/client';
import { Customer, ErrorResponse } from '../serverModel';
import { CustomerFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerResponse {
  success: boolean;
  data?: Customer;
  error?: ErrorResponse;
}
export interface RedeemPointsInput {
  increase_amount: number;
}


const redeemPointsGqlString = gql`
  ${CustomerFragment()}
  ${ErrorResponseFragment()}
  mutation RedeemPoints($data: RedeemPointsInput!) {
    redeemPoints(input: $data) {
      success
      data {
        ...CustomerFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendRedeemPointsMutation = (
  apolloClient: ApolloClient<object>,
  inputData: RedeemPointsInput,
): Promise<{ data: { redeemPoints: CustomerResponse} }> => {
  return apolloClient.mutate({
    mutation: redeemPointsGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { redeemPoints: CustomerResponse} }>;
};

export default sendRedeemPointsMutation
