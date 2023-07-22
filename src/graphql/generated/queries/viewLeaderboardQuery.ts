import { gql, QueryResult, useQuery } from '@apollo/client';
import { Leaderboard, ErrorResponse } from '../serverModel';
import { LeaderboardFragment, ErrorResponseFragment } from '../fragments';

export interface ViewLeaderboardResponse {
  success: boolean;
  data?: Leaderboard;
  error?: ErrorResponse;
}

const useViewLeaderboardQuery = (
  leaderboardFragment = LeaderboardFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{viewLeaderboard: ViewLeaderboardResponse}> => {
  const viewLeaderboardGqlString = gql`
    ${leaderboardFragment()}
    ${errorResponseFragment()}
    query ViewLeaderboard {
      viewLeaderboard {
        success
        data {
          ...LeaderboardFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{viewLeaderboard: ViewLeaderboardResponse}>(viewLeaderboardGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useViewLeaderboardQuery
