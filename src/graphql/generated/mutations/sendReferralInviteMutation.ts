import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface SendReferralInviteInput {
  email: string;
}


const sendReferralInviteGqlString = gql`
  ${ErrorResponseFragment()}
  mutation SendReferralInvite($data: SendReferralInviteInput!) {
    sendReferralInvite(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendSendReferralInviteMutation = (
  apolloClient: ApolloClient<object>,
  inputData: SendReferralInviteInput,
): Promise<{ data: { sendReferralInvite: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: sendReferralInviteGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { sendReferralInvite: BooleanResponse} }>;
};

export default sendSendReferralInviteMutation
