import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}


const sendValidateEmailLinkGqlString = gql`
  ${ErrorResponseFragment()}
  mutation SendValidateEmailLink {
    sendValidateEmailLink {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendSendValidateEmailLinkMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { sendValidateEmailLink: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: sendValidateEmailLinkGqlString,
  }) as Promise<{ data: { sendValidateEmailLink: BooleanResponse} }>;
};

export default sendSendValidateEmailLinkMutation
