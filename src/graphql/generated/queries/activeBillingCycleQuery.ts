import { gql, QueryResult, useQuery } from '@apollo/client';
import { BillingCycle, ErrorResponse } from '../serverModel';
import { BillingCycleFragment, ErrorResponseFragment } from '../fragments';

export interface BillingCycleResponse {
  success: boolean;
  data?: BillingCycle;
  error?: ErrorResponse;
}
export interface ActiveBillingCycleQueryInput {
  subscription_id: string;
}

const useActiveBillingCycleQuery = (
  inputData: ActiveBillingCycleQueryInput,
  billingCycleFragment = BillingCycleFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{activeBillingCycle: BillingCycleResponse}> => {
  const activeBillingCycleGqlString = gql`
    ${billingCycleFragment()}
    ${errorResponseFragment()}
    query ActiveBillingCycle($data: ActiveBillingCycleQueryInput!) {
      activeBillingCycle(data: $data) {
        success
        data {
          ...BillingCycleFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{activeBillingCycle: BillingCycleResponse}>(activeBillingCycleGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useActiveBillingCycleQuery
