import { ApolloClient, gql } from '@apollo/client';
import { CustomerCreditReport, ErrorResponse } from '../serverModel';
import { CustomerCreditReportFragment, ErrorResponseFragment } from '../fragments';

export interface CustomerCreditReportResponse {
  success: boolean;
  data?: CustomerCreditReport;
  error?: ErrorResponse;
}


const accessCreditReportGqlString = gql`
  ${CustomerCreditReportFragment()}
  ${ErrorResponseFragment()}
  mutation AccessCreditReport {
    accessCreditReport {
      success
      data {
        ...CustomerCreditReportFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendAccessCreditReportMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { accessCreditReport: CustomerCreditReportResponse} }> => {
  return apolloClient.mutate({
    mutation: accessCreditReportGqlString,
  }) as Promise<{ data: { accessCreditReport: CustomerCreditReportResponse} }>;
};

export default sendAccessCreditReportMutation
