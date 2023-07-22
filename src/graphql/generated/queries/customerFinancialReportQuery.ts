import { gql, QueryResult, useQuery } from '@apollo/client';
import { CustomerFinancialReportGqlObject, ErrorResponse } from '../serverModel';
import { CustomerFinancialReportGqlObjectFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerFinancialReportResponse {
  success: boolean;
  data?: CustomerFinancialReportGqlObject;
  error?: ErrorResponse;
}

const useCustomerFinancialReportQuery = (
  customerFinancialReportGqlObjectFragment = CustomerFinancialReportGqlObjectFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{customerFinancialReport: CustomerFinancialReportResponse}> => {
  const customerFinancialReportGqlString = gql`
    ${customerFinancialReportGqlObjectFragment()}
    ${errorResponseFragment()}
    query CustomerFinancialReport {
      customerFinancialReport {
        success
        data {
          ...CustomerFinancialReportGqlObjectFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{customerFinancialReport: CustomerFinancialReportResponse}>(customerFinancialReportGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useCustomerFinancialReportQuery
