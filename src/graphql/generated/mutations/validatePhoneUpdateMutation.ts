import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface ValidateUpdatePhoneInput {
  phone_number: string;
  pin: string;
}


const validatePhoneUpdateGqlString = gql`
  ${ErrorResponseFragment()}
  mutation ValidatePhoneUpdate($data: ValidateUpdatePhoneInput!) {
    validatePhoneUpdate(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendValidatePhoneUpdateMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ValidateUpdatePhoneInput,
): Promise<{ data: { validatePhoneUpdate: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: validatePhoneUpdateGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { validatePhoneUpdate: BooleanResponse} }>;
};

export default sendValidatePhoneUpdateMutation
