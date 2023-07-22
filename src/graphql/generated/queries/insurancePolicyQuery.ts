import { gql, QueryResult, useQuery } from '@apollo/client';
import { Policy, ErrorResponse } from '../serverModel';
import { PolicyFragment, ErrorResponseFragment } from '../fragments';

export interface PolicyResponse {
  success: boolean;
  data?: Policy;
  error?: ErrorResponse;
}
export interface InsurancePolicyQueryInput {
  subscription_id: string;
}

const useInsurancePolicyQuery = (
  inputData: InsurancePolicyQueryInput,
  policyFragment = PolicyFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{insurancePolicy: PolicyResponse}> => {
  const insurancePolicyGqlString = gql`
    ${policyFragment()}
    ${errorResponseFragment()}
    query InsurancePolicy($data: InsurancePolicyQueryInput!) {
      insurancePolicy(data: $data) {
        success
        data {
          ...PolicyFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{insurancePolicy: PolicyResponse}>(insurancePolicyGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useInsurancePolicyQuery
