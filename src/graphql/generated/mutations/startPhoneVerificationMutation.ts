import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface StartPhoneVerificationResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface StartPhoneVerificationInput {
  phoneNumber: string;
}


const startPhoneVerificationGqlString = gql`
  ${ErrorResponseFragment()}
  mutation StartPhoneVerification($data: StartPhoneVerificationInput!) {
    startPhoneVerification(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendStartPhoneVerificationMutation = (
  apolloClient: ApolloClient<object>,
  inputData: StartPhoneVerificationInput,
): Promise<{ data: { startPhoneVerification: StartPhoneVerificationResponse} }> => {
  return apolloClient.mutate({
    mutation: startPhoneVerificationGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { startPhoneVerification: StartPhoneVerificationResponse} }>;
};

export default sendStartPhoneVerificationMutation
