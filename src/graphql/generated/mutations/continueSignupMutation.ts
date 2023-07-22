import { ApolloClient, gql } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface ContinueSignupInput {
  signup_intent_id: string;
}


const continueSignupGqlString = gql`
  ${SignupIntentFragment()}
  ${ErrorResponseFragment()}
  mutation ContinueSignup($data: ContinueSignupInput!) {
    continueSignup(input: $data) {
      success
      data {
        ...SignupIntentFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendContinueSignupMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ContinueSignupInput,
): Promise<{ data: { continueSignup: SignupIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: continueSignupGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { continueSignup: SignupIntentResponse} }>;
};

export default sendContinueSignupMutation
