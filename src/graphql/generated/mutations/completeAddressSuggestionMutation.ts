import { ApolloClient, gql } from '@apollo/client';
import { CompletedAddress, ErrorResponse } from '../serverModel';
import { CompletedAddressFragment, ErrorResponseFragment } from '../fragments';

export interface CompleteAddressSuggestionResponse {
  success: boolean;
  data?: CompletedAddress;
  error?: ErrorResponse;
}
export interface CompleteAddressSuggestionInput {
  selection_index: number;
  partial_address: string;
}


const completeAddressSuggestionGqlString = gql`
  ${CompletedAddressFragment()}
  ${ErrorResponseFragment()}
  mutation CompleteAddressSuggestion($data: CompleteAddressSuggestionInput!) {
    completeAddressSuggestion(input: $data) {
      success
      data {
        ...CompletedAddressFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendCompleteAddressSuggestionMutation = (
  apolloClient: ApolloClient<object>,
  inputData: CompleteAddressSuggestionInput,
): Promise<{ data: { completeAddressSuggestion: CompleteAddressSuggestionResponse} }> => {
  return apolloClient.mutate({
    mutation: completeAddressSuggestionGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { completeAddressSuggestion: CompleteAddressSuggestionResponse} }>;
};

export default sendCompleteAddressSuggestionMutation
