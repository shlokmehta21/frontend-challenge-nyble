import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface ValidateEmailInput {
  token: string;
}


const validateEmailGqlString = gql`
  ${ErrorResponseFragment()}
  mutation ValidateEmail($data: ValidateEmailInput!) {
    validateEmail(data: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendValidateEmailMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ValidateEmailInput,
): Promise<{ data: { validateEmail: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: validateEmailGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { validateEmail: BooleanResponse} }>;
};

export default sendValidateEmailMutation
