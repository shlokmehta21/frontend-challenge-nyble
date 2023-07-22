import { gql, QueryResult, useQuery } from '@apollo/client';
import { RewardsAccount, ErrorResponse } from '../serverModel';
import { RewardsAccountFragment, ErrorResponseFragment } from '../fragments';

export interface RewardsAccountResponse {
  success: boolean;
  data?: RewardsAccount;
  error?: ErrorResponse;
}

const useRewardsAccountQuery = (
  rewardsAccountFragment = RewardsAccountFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{rewardsAccount: RewardsAccountResponse}> => {
  const rewardsAccountGqlString = gql`
    ${rewardsAccountFragment()}
    ${errorResponseFragment()}
    query RewardsAccount {
      rewardsAccount {
        success
        data {
          ...RewardsAccountFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{rewardsAccount: RewardsAccountResponse}>(rewardsAccountGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useRewardsAccountQuery
