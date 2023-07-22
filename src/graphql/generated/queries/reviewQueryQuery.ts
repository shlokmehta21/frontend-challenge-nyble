import { gql, QueryResult, useQuery } from '@apollo/client';
import { Review, ErrorResponse } from '../serverModel';
import { ReviewFragment, ErrorResponseFragment } from '../fragments';

export interface ReviewResponse {
  success: boolean;
  data?: Review;
  error?: ErrorResponse;
}

const useReviewQueryQuery = (
  reviewFragment = ReviewFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{reviewQuery: ReviewResponse}> => {
  const reviewQueryGqlString = gql`
    ${reviewFragment()}
    ${errorResponseFragment()}
    query ReviewQuery {
      reviewQuery {
        success
        data {
          ...ReviewFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{reviewQuery: ReviewResponse}>(reviewQueryGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useReviewQueryQuery
