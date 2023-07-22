import { ApolloClient, gql } from '@apollo/client';
import { Customer, ErrorResponse } from '../serverModel';
import { CustomerFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerResponse {
  success: boolean;
  data?: Customer;
  error?: ErrorResponse;
}
export interface UpdatePersonalInfoInput {
  first_name?: string;
  last_name?: string;
  birthday?: string;
  social_insurance_number?: string;
}


const updatePersonalInfoGqlString = gql`
  ${CustomerFragment()}
  ${ErrorResponseFragment()}
  mutation UpdatePersonalInfo($data: UpdatePersonalInfoInput!) {
    updatePersonalInfo(input: $data) {
      success
      data {
        ...CustomerFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendUpdatePersonalInfoMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpdatePersonalInfoInput,
): Promise<{ data: { updatePersonalInfo: CustomerResponse} }> => {
  return apolloClient.mutate({
    mutation: updatePersonalInfoGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { updatePersonalInfo: CustomerResponse} }>;
};

export default sendUpdatePersonalInfoMutation
