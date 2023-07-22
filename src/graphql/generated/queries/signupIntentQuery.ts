import { gql, QueryResult, useQuery } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface SignupIntentQueryInput {
  signup_intent_id: string;
}

const useSignupIntentQuery = (
  inputData: SignupIntentQueryInput,
  signupIntentFragment = SignupIntentFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{signupIntent: SignupIntentResponse}> => {
  const signupIntentGqlString = gql`
    ${signupIntentFragment()}
    ${errorResponseFragment()}
    query SignupIntent($data: SignupIntentQueryInput!) {
      signupIntent(input: $data) {
        success
        data {
          ...SignupIntentFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{signupIntent: SignupIntentResponse}>(signupIntentGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useSignupIntentQuery
