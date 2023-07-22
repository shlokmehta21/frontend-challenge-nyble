import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface AddPasswordAndFinishResponse {
  success: boolean;
  data?: string;
  error?: ErrorResponse;
}
export interface AddPasswordAndFinishInput {
  signup_intent_id: string;
  raw_password: string;
}


const AddPasswordAndFinishGqlString = gql`
  ${ErrorResponseFragment()}
  mutation AddPasswordAndFinish($data: AddPasswordAndFinishInput!) {
    AddPasswordAndFinish(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendAddPasswordAndFinishMutation = (
  apolloClient: ApolloClient<object>,
  inputData: AddPasswordAndFinishInput,
): Promise<{ data: { AddPasswordAndFinish: AddPasswordAndFinishResponse} }> => {
  return apolloClient.mutate({
    mutation: AddPasswordAndFinishGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { AddPasswordAndFinish: AddPasswordAndFinishResponse} }>;
};

export default sendAddPasswordAndFinishMutation
