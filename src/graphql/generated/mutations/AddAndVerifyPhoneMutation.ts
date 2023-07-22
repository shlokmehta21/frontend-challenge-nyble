import { ApolloClient, gql } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface AddAndVerifyPhoneInput {
  phone_number: string;
  pin: string;
  signup_intent_id: string;
}


const AddAndVerifyPhoneGqlString = gql`
  ${SignupIntentFragment()}
  ${ErrorResponseFragment()}
  mutation AddAndVerifyPhone($data: AddAndVerifyPhoneInput!) {
    AddAndVerifyPhone(input: $data) {
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
const sendAddAndVerifyPhoneMutation = (
  apolloClient: ApolloClient<object>,
  inputData: AddAndVerifyPhoneInput,
): Promise<{ data: { AddAndVerifyPhone: SignupIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: AddAndVerifyPhoneGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { AddAndVerifyPhone: SignupIntentResponse} }>;
};

export default sendAddAndVerifyPhoneMutation
