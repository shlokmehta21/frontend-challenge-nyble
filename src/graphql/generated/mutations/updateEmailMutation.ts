import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface UpdateEmailInput {
  email: string;
}


const updateEmailGqlString = gql`
  ${ErrorResponseFragment()}
  mutation UpdateEmail($data: UpdateEmailInput!) {
    updateEmail(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendUpdateEmailMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpdateEmailInput,
): Promise<{ data: { updateEmail: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: updateEmailGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { updateEmail: BooleanResponse} }>;
};

export default sendUpdateEmailMutation
