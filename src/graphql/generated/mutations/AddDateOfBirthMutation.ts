import { ApolloClient, gql } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface AddDateOfBirthInput {
  date_of_birth: string;
  signup_intent_id: string;
}


const AddDateOfBirthGqlString = gql`
  ${SignupIntentFragment()}
  ${ErrorResponseFragment()}
  mutation AddDateOfBirth($data: AddDateOfBirthInput!) {
    AddDateOfBirth(input: $data) {
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
const sendAddDateOfBirthMutation = (
  apolloClient: ApolloClient<object>,
  inputData: AddDateOfBirthInput,
): Promise<{ data: { AddDateOfBirth: SignupIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: AddDateOfBirthGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { AddDateOfBirth: SignupIntentResponse} }>;
};

export default sendAddDateOfBirthMutation
