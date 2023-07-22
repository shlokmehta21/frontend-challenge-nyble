import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface UpdatePhoneInput {
  phone_number: string;
}


const updatePhoneGqlString = gql`
  ${ErrorResponseFragment()}
  mutation UpdatePhone($data: UpdatePhoneInput!) {
    updatePhone(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendUpdatePhoneMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpdatePhoneInput,
): Promise<{ data: { updatePhone: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: updatePhoneGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { updatePhone: BooleanResponse} }>;
};

export default sendUpdatePhoneMutation
