import { gql, QueryResult, useQuery } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface NextPaydayResponse {
  success: boolean;
  data?: string;
  error?: ErrorResponse;
}

const useNextPaydayQuery = (
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{nextPayday: NextPaydayResponse}> => {
  const nextPaydayGqlString = gql`
    ${errorResponseFragment()}
    query NextPayday {
      nextPayday {
        success
data
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{nextPayday: NextPaydayResponse}>(nextPaydayGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useNextPaydayQuery
