import { ApolloClient, gql } from '@apollo/client';
import { Review, ErrorResponse } from '../serverModel';
import { ReviewFragment, ErrorResponseFragment } from '../fragments';

export interface ReviewResponse {
  success: boolean;
  data?: Review;
  error?: ErrorResponse;
}
export interface SubmitTrustpilotReviewInput {
  rating: number;
  comment: string;
}


const submitTrustpilotReviewGqlString = gql`
  ${ReviewFragment()}
  ${ErrorResponseFragment()}
  mutation SubmitTrustpilotReview($data: SubmitTrustpilotReviewInput!) {
    submitTrustpilotReview(data: $data) {
      success
      data {
        ...ReviewFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendSubmitTrustpilotReviewMutation = (
  apolloClient: ApolloClient<object>,
  inputData: SubmitTrustpilotReviewInput,
): Promise<{ data: { submitTrustpilotReview: ReviewResponse} }> => {
  return apolloClient.mutate({
    mutation: submitTrustpilotReviewGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { submitTrustpilotReview: ReviewResponse} }>;
};

export default sendSubmitTrustpilotReviewMutation
