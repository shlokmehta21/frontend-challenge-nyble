import { gql, QueryResult, useQuery } from '@apollo/client';
import { CustomerAddress, ErrorResponse } from '../serverModel';
import { CustomerAddressFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerAddressResponse {
  success: boolean;
  data?: CustomerAddress;
  error?: ErrorResponse;
}

const useCustomerAddressQuery = (
  customerAddressFragment = CustomerAddressFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{customerAddress: CustomerAddressResponse}> => {
  const customerAddressGqlString = gql`
    ${customerAddressFragment()}
    ${errorResponseFragment()}
    query CustomerAddress {
      customerAddress {
        success
        data {
          ...CustomerAddressFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{customerAddress: CustomerAddressResponse}>(customerAddressGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useCustomerAddressQuery
