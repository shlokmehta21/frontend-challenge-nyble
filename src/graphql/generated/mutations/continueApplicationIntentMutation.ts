import { ApolloClient, gql } from '@apollo/client';
import { ApplicationIntent, ErrorResponse } from '../serverModel';
import { ApplicationIntentFragment, ErrorResponseFragment } from '../fragments';

export interface ApplicationIntentResponse {
  success: boolean;
  data?: ApplicationIntent;
  error?: ErrorResponse;
}
export interface ContinueApplicationIntentInputType {
  application_intent_id: string;
}


const continueApplicationIntentGqlString = gql`
  ${ApplicationIntentFragment()}
  ${ErrorResponseFragment()}
  mutation ContinueApplicationIntent($data: ContinueApplicationIntentInputType!) {
    continueApplicationIntent(input: $data) {
      success
      data {
        ...ApplicationIntentFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendContinueApplicationIntentMutation = (
  apolloClient: ApolloClient<object>,
  inputData: ContinueApplicationIntentInputType,
): Promise<{ data: { continueApplicationIntent: ApplicationIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: continueApplicationIntentGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { continueApplicationIntent: ApplicationIntentResponse} }>;
};

export default sendContinueApplicationIntentMutation
