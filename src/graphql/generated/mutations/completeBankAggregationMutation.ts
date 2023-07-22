import { ApolloClient, gql } from '@apollo/client';
import { BankAggregation, ErrorResponse } from '../serverModel';
import { BankAggregationFragment, ErrorResponseFragment } from '../fragments';

export interface BankAggregationResponse {
  success: boolean;
  data?: BankAggregation;
  error?: ErrorResponse;
}
export interface CompleteBankAggregationInputType {
  bank_aggregation_intent_id: string;
  flinks_login_id?: string;
  plaid_public_token?: string;
  zumrails_request_id?: string;
  zumrails_user_id?: string;
  account_id?: string;
}


const completeBankAggregationGqlString = gql`
  ${BankAggregationFragment()}
  ${ErrorResponseFragment()}
  mutation CompleteBankAggregation($data: CompleteBankAggregationInputType!) {
    completeBankAggregation(input: $data) {
      success
      data {
        ...BankAggregationFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendCompleteBankAggregationMutation = (
  apolloClient: ApolloClient<object>,
  inputData: CompleteBankAggregationInputType,
): Promise<{ data: { completeBankAggregation: BankAggregationResponse} }> => {
  return apolloClient.mutate({
    mutation: completeBankAggregationGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { completeBankAggregation: BankAggregationResponse} }>;
};

export default sendCompleteBankAggregationMutation
