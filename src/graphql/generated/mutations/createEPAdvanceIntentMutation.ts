import { ApolloClient, gql } from '@apollo/client';
import { EPAdvanceOptionType, EPAdvance, ErrorResponse } from '../serverModel';
import { EPAdvanceFragment, ErrorResponseFragment } from '../fragments';

export interface EPAdvanceResponse {
  success: boolean;
  data?: EPAdvance;
  error?: ErrorResponse;
}
export interface CreateEPAdvanceInput {
  paydate?: string;
  amount: number;
  option: keyof EPAdvanceOptionType;
  tip?: number;
  account_id: string;
}


const createEPAdvanceIntentGqlString = gql`
  ${EPAdvanceFragment()}
  ${ErrorResponseFragment()}
  mutation CreateEPAdvanceIntent($data: CreateEPAdvanceInput!) {
    createEPAdvanceIntent(data: $data) {
      success
      data {
        ...EPAdvanceFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendCreateEPAdvanceIntentMutation = (
  apolloClient: ApolloClient<object>,
  inputData: CreateEPAdvanceInput,
): Promise<{ data: { createEPAdvanceIntent: EPAdvanceResponse} }> => {
  return apolloClient.mutate({
    mutation: createEPAdvanceIntentGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { createEPAdvanceIntent: EPAdvanceResponse} }>;
};

export default sendCreateEPAdvanceIntentMutation
