import { ApolloClient, gql } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface StartSignupInput {
  email: string;
  first_name?: string;
  last_name?: string;
  utm_campaign?: string;
  utm_click_id?: string;
  referral_code?: string;
}


const StartSignupGqlString = gql`
  ${SignupIntentFragment()}
  ${ErrorResponseFragment()}
  mutation StartSignup($data: StartSignupInput!) {
    StartSignup(input: $data) {
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
const sendStartSignupMutation = (
  apolloClient: ApolloClient<object>,
  inputData: StartSignupInput,
): Promise<{ data: { StartSignup: SignupIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: StartSignupGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { StartSignup: SignupIntentResponse} }>;
};

export default sendStartSignupMutation
