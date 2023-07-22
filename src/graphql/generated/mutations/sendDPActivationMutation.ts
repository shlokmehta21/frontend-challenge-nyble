import { ApolloClient, gql } from '@apollo/client';
import { Policy, ErrorResponse } from '../serverModel';
import { PolicyFragment, ErrorResponseFragment } from '../fragments';

export interface PolicyResponse {
  success: boolean;
  data?: Policy;
  error?: ErrorResponse;
}


const sendDPActivationGqlString = gql`
  ${PolicyFragment()}
  ${ErrorResponseFragment()}
  mutation SendDPActivation {
    sendDPActivation {
      success
      data {
        ...PolicyFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendSendDPActivationMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { sendDPActivation: PolicyResponse} }> => {
  return apolloClient.mutate({
    mutation: sendDPActivationGqlString,
  }) as Promise<{ data: { sendDPActivation: PolicyResponse} }>;
};

export default sendSendDPActivationMutation
