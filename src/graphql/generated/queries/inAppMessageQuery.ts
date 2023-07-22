import { gql, QueryResult, useQuery } from '@apollo/client';
import { Message, ErrorResponse } from '../serverModel';
import { MessageFragment, ErrorResponseFragment } from '../fragments';

export interface MessageResponse {
  success: boolean;
  data?: Message;
  error?: ErrorResponse;
}

const useInAppMessageQuery = (
  messageFragment = MessageFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{inAppMessage: MessageResponse}> => {
  const inAppMessageGqlString = gql`
    ${messageFragment()}
    ${errorResponseFragment()}
    query InAppMessage {
      inAppMessage {
        success
        data {
          ...MessageFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{inAppMessage: MessageResponse}>(inAppMessageGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useInAppMessageQuery
