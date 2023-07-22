import { ApolloClient, gql } from '@apollo/client';
import { Customer, ErrorResponse } from '../serverModel';
import { CustomerFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerResponse {
  success: boolean;
  data?: Customer;
  error?: ErrorResponse;
}
export interface UpdatePasswordInput {
  oldPassword: string;
  newPassword: string;
}


const updatePasswordGqlString = gql`
  ${CustomerFragment()}
  ${ErrorResponseFragment()}
  mutation UpdatePassword($data: UpdatePasswordInput!) {
    updatePassword(data: $data) {
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
const sendUpdatePasswordMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpdatePasswordInput,
): Promise<{ data: { updatePassword: CustomerResponse} }> => {
  return apolloClient.mutate({
    mutation: updatePasswordGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { updatePassword: CustomerResponse} }>;
};

export default sendUpdatePasswordMutation
