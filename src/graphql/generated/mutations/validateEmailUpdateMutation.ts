import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface ValidateEmailUpdateInput {
  token: string;
  email: string;
}


const validateEmailUpdateGqlString = gql`
  ${ErrorResponseFragment()}
  mutation ValidateEmailUpdate($data: ValidateEmailUpdateInput!) {
    validateEmailUpdate(data: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendValidateEmailUpdateMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ValidateEmailUpdateInput,
): Promise<{ data: { validateEmailUpdate: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: validateEmailUpdateGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { validateEmailUpdate: BooleanResponse} }>;
};

export default sendValidateEmailUpdateMutation
