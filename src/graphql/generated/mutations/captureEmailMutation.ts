import { ApolloClient, gql } from '@apollo/client';
import { Registration, ErrorResponse } from '../serverModel';
import { RegistrationFragment, ErrorResponseFragment } from '../fragments';

export interface RegistrationResponse {
  success: boolean;
  data?: Registration;
  error?: ErrorResponse;
}
export interface CaptureEmailInput {
  customer_email: string;
}


const captureEmailGqlString = gql`
  ${RegistrationFragment()}
  ${ErrorResponseFragment()}
  mutation CaptureEmail($data: CaptureEmailInput!) {
    captureEmail(input: $data) {
      success
      data {
        ...RegistrationFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendCaptureEmailMutation = (
  apolloClient: ApolloClient<object>,
  inputData: CaptureEmailInput,
): Promise<{ data: { captureEmail: RegistrationResponse} }> => {
  return apolloClient.mutate({
    mutation: captureEmailGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { captureEmail: RegistrationResponse} }>;
};

export default sendCaptureEmailMutation
