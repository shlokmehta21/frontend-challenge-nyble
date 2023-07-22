import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface ResetPasswordLinkInput {
  email: string;
}


const sendResetPasswordLinkGqlString = gql`
  ${ErrorResponseFragment()}
  mutation SendResetPasswordLink($data: ResetPasswordLinkInput!) {
    sendResetPasswordLink(data: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendSendResetPasswordLinkMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ResetPasswordLinkInput,
): Promise<{ data: { sendResetPasswordLink: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: sendResetPasswordLinkGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { sendResetPasswordLink: BooleanResponse} }>;
};

export default sendSendResetPasswordLinkMutation
