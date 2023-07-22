import { ApolloClient, gql } from '@apollo/client';
import { CreditHealthReport, ErrorResponse } from '../serverModel';
import { CreditHealthReportFragment, ErrorResponseFragment } from '../fragments';

export interface CreditHealthReportResponse {
  success: boolean;
  data?: CreditHealthReport;
  error?: ErrorResponse;
}


const accessCreditHealthGqlString = gql`
  ${CreditHealthReportFragment()}
  ${ErrorResponseFragment()}
  mutation AccessCreditHealth {
    accessCreditHealth {
      success
      data {
        ...CreditHealthReportFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendAccessCreditHealthMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { accessCreditHealth: CreditHealthReportResponse} }> => {
  return apolloClient.mutate({
    mutation: accessCreditHealthGqlString,
  }) as Promise<{ data: { accessCreditHealth: CreditHealthReportResponse} }>;
};

export default sendAccessCreditHealthMutation
