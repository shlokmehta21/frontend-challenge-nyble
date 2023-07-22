import { ApolloClient, gql } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface AddNamesInput {
  signup_intent_id: string;
  first_name: string;
  last_name: string;
}


const addNamesGqlString = gql`
  ${SignupIntentFragment()}
  ${ErrorResponseFragment()}
  mutation AddNames($data: AddNamesInput!) {
    addNames(input: $data) {
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
const sendAddNamesMutation = (
  apolloClient: ApolloClient<object>,
  inputData: AddNamesInput,
): Promise<{ data: { addNames: SignupIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: addNamesGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { addNames: SignupIntentResponse} }>;
};

export default sendAddNamesMutation
