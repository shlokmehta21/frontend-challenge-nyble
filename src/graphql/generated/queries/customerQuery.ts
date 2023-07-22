import { gql, QueryResult, useQuery } from '@apollo/client';
import { Customer, ErrorResponse } from '../serverModel';
import { CustomerFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerResponse {
  success: boolean;
  data?: Customer;
  error?: ErrorResponse;
}

const useCustomerQuery = (
  customerFragment = CustomerFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{customer: CustomerResponse}> => {
  const customerGqlString = gql`
    ${customerFragment()}
    ${errorResponseFragment()}
    query Customer {
      customer {
        success
        data {
          ...CustomerFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{customer: CustomerResponse}>(customerGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useCustomerQuery
