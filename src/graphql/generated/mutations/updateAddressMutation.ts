import { ApolloClient, gql } from '@apollo/client';
import { Customer, ErrorResponse } from '../serverModel';
import { CustomerFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerResponse {
  success: boolean;
  data?: Customer;
  error?: ErrorResponse;
}
export interface UpdateAddressInput {
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  province: string;
  city: string;
}


const updateAddressGqlString = gql`
  ${CustomerFragment()}
  ${ErrorResponseFragment()}
  mutation UpdateAddress($data: UpdateAddressInput!) {
    updateAddress(input: $data) {
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
const sendUpdateAddressMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpdateAddressInput,
): Promise<{ data: { updateAddress: CustomerResponse} }> => {
  return apolloClient.mutate({
    mutation: updateAddressGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { updateAddress: CustomerResponse} }>;
};

export default sendUpdateAddressMutation
