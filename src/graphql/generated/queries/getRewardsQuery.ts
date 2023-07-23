import { gql, QueryResult, useQuery } from '@apollo/client';
import { RewardsAccount, ErrorResponse } from '../serverModel';
import { RewardsAccountFragment, ErrorResponseFragment } from '../fragments';

export interface RewardsResponse {
  success: boolean;
  data?: RewardsAccount;
  error?: ErrorResponse;
}

const useGetRewardsQuery = (
  rewardsAccountFragment = RewardsAccountFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{getRewards: RewardsResponse}> => {
  const getRewardsGqlString = gql`
    ${rewardsAccountFragment()}
    ${errorResponseFragment()}
    query GetRewards {
      getRewards {
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

  return useQuery<{getRewards: RewardsResponse}>(getRewardsGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useGetRewardsQuery
