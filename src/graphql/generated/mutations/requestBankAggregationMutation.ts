import { ApolloClient, gql } from '@apollo/client';
import { BankAggregationIntent, ErrorResponse } from '../serverModel';
import { BankAggregationIntentFragment, ErrorResponseFragment } from '../fragments';

export interface BankAggregationIntentResponse {
  success: boolean;
  data?: BankAggregationIntent;
  error?: ErrorResponse;
}
export interface RequestBankAggregationInputType {
  institution_nb?: string;
}


const requestBankAggregationGqlString = gql`
  ${BankAggregationIntentFragment()}
  ${ErrorResponseFragment()}
  mutation RequestBankAggregation($data: RequestBankAggregationInputType!) {
    requestBankAggregation(input: $data) {
      success
      data {
        ...BankAggregationIntentFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendRequestBankAggregationMutation = (
  apolloClient: ApolloClient<object>,
  inputData: RequestBankAggregationInputType,
): Promise<{ data: { requestBankAggregation: BankAggregationIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: requestBankAggregationGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { requestBankAggregation: BankAggregationIntentResponse} }>;
};

export default sendRequestBankAggregationMutation
