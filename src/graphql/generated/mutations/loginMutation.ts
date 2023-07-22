import { ApolloClient, gql } from '@apollo/client';
import { Token, ErrorResponse } from '../serverModel';
import { TokenFragment, ErrorResponseFragment } from '../fragments';

export interface UserLoginResponse {
  success: boolean;
  data?: Token;
  error?: ErrorResponse;
}
export interface LoginInput {
  email?: string;
  phoneNumber?: string;
  password: string;
}


const loginGqlString = gql`
  ${TokenFragment()}
  ${ErrorResponseFragment()}
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      success
      data {
        ...TokenFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendLoginMutation = (
  apolloClient: ApolloClient<object>,
  inputData: LoginInput,
): Promise<{ data: { login: UserLoginResponse} }> => {
  return apolloClient.mutate({
    mutation: loginGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { login: UserLoginResponse} }>;
};

export default sendLoginMutation
