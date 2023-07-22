import { ApolloClient, gql } from '@apollo/client';
import { InputAddress, ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface CustomerSignupResponse {
  success: boolean;
  data?: string;
  error?: ErrorResponse;
}
export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  address: InputAddress;
  birthday: string;
  phoneNumber: string;
  password?: string;
  gender?: string;
  referral_code?: string;
}


const customerSignupGqlString = gql`
  ${ErrorResponseFragment()}
  mutation CustomerSignup($data: UserInput!) {
    customerSignup(data: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendCustomerSignupMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UserInput,
): Promise<{ data: { customerSignup: CustomerSignupResponse} }> => {
  return apolloClient.mutate({
    mutation: customerSignupGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { customerSignup: CustomerSignupResponse} }>;
};

export default sendCustomerSignupMutation
