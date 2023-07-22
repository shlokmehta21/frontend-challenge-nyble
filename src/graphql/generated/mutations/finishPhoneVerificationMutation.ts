import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface FinishPhoneVerificationResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface FinishPhoneVerificationInput {
  phoneNumber: string;
  pin: string;
}


const finishPhoneVerificationGqlString = gql`
  ${ErrorResponseFragment()}
  mutation FinishPhoneVerification($data: FinishPhoneVerificationInput!) {
    finishPhoneVerification(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendFinishPhoneVerificationMutation = (
  apolloClient: ApolloClient<object>,
  inputData: FinishPhoneVerificationInput,
): Promise<{ data: { finishPhoneVerification: FinishPhoneVerificationResponse} }> => {
  return apolloClient.mutate({
    mutation: finishPhoneVerificationGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { finishPhoneVerification: FinishPhoneVerificationResponse} }>;
};

export default sendFinishPhoneVerificationMutation
