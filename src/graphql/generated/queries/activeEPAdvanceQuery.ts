import { gql, QueryResult, useQuery } from '@apollo/client';
import { EPAdvance, ErrorResponse } from '../serverModel';
import { EPAdvanceFragment, ErrorResponseFragment } from '../fragments';

export interface EPAdvanceResponse {
  success: boolean;
  data?: EPAdvance;
  error?: ErrorResponse;
}

const useActiveEPAdvanceQuery = (
  ePAdvanceFragment = EPAdvanceFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{activeEPAdvance: EPAdvanceResponse}> => {
  const activeEPAdvanceGqlString = gql`
    ${ePAdvanceFragment()}
    ${errorResponseFragment()}
    query ActiveEPAdvance {
      activeEPAdvance {
        success
        data {
          ...EPAdvanceFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{activeEPAdvance: EPAdvanceResponse}>(activeEPAdvanceGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useActiveEPAdvanceQuery
