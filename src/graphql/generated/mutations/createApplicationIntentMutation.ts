import { ApolloClient, gql } from '@apollo/client';
import { CustomerAccountTypeType, ApplicationIntent, ErrorResponse } from '../serverModel';
import { ApplicationIntentFragment, ErrorResponseFragment } from '../fragments';

export interface ApplicationIntentResponse {
  success: boolean;
  data?: ApplicationIntent;
  error?: ErrorResponse;
}
export interface CreateApplicationIntentInput {
  scope: keyof CustomerAccountTypeType;
}


const createApplicationIntentGqlString = gql`
  ${ApplicationIntentFragment()}
  ${ErrorResponseFragment()}
  mutation CreateApplicationIntent($data: CreateApplicationIntentInput!) {
    createApplicationIntent(input: $data) {
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
const sendCreateApplicationIntentMutation = (
  apolloClient: ApolloClient<object>,
  inputData: CreateApplicationIntentInput,
): Promise<{ data: { createApplicationIntent: ApplicationIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: createApplicationIntentGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { createApplicationIntent: ApplicationIntentResponse} }>;
};

export default sendCreateApplicationIntentMutation
