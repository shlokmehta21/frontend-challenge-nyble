import { gql, QueryResult, useQuery } from '@apollo/client';
import { CustomerAccountTypeType, CustomerAccount, ErrorResponse } from '../serverModel';
import { CustomerAccountFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerAccountResponse {
  success: boolean;
  data?: CustomerAccount;
  error?: ErrorResponse;
}
export interface CustomerAccountQueryInput {
  type?: keyof CustomerAccountTypeType;
}

const useCustomerAccountQuery = (
  inputData: CustomerAccountQueryInput,
  customerAccountFragment = CustomerAccountFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{customerAccount: CustomerAccountResponse}> => {
  const customerAccountGqlString = gql`
    ${customerAccountFragment()}
    ${errorResponseFragment()}
    query CustomerAccount($data: CustomerAccountQueryInput!) {
      customerAccount(data: $data) {
        success
        data {
          ...CustomerAccountFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{customerAccount: CustomerAccountResponse}>(customerAccountGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useCustomerAccountQuery
