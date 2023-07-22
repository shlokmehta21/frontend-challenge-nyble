import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface ResetPasswordInput {
  token: string;
  newPassword: string;
}


const resetPasswordGqlString = gql`
  ${ErrorResponseFragment()}
  mutation ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendResetPasswordMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ResetPasswordInput,
): Promise<{ data: { resetPassword: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: resetPasswordGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { resetPassword: BooleanResponse} }>;
};

export default sendResetPasswordMutation
