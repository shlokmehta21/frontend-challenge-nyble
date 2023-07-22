import { ApolloClient, gql } from '@apollo/client';
import { SignupIntent, ErrorResponse } from '../serverModel';
import { SignupIntentFragment, ErrorResponseFragment } from '../fragments';

export interface SignupIntentResponse {
  success: boolean;
  data?: SignupIntent;
  error?: ErrorResponse;
}
export interface AddAndVerifyAddressInput {
  signup_intent_id: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  province: string;
  city: string;
}


const AddAndVerifyAddressGqlString = gql`
  ${SignupIntentFragment()}
  ${ErrorResponseFragment()}
  mutation AddAndVerifyAddress($data: AddAndVerifyAddressInput!) {
    AddAndVerifyAddress(input: $data) {
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
const sendAddAndVerifyAddressMutation = (
  apolloClient: ApolloClient<object>,
  inputData: AddAndVerifyAddressInput,
): Promise<{ data: { AddAndVerifyAddress: SignupIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: AddAndVerifyAddressGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { AddAndVerifyAddress: SignupIntentResponse} }>;
};

export default sendAddAndVerifyAddressMutation
