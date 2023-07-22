import { ApolloClient, gql } from '@apollo/client';
import { AddressSuggestionsList, ErrorResponse } from '../serverModel';
import { AddressSuggestionsListFragment, ErrorResponseFragment } from '../fragments';

export interface GetAddressSuggestionsListResponse {
  success: boolean;
  data?: AddressSuggestionsList;
  error?: ErrorResponse;
}
export interface GetAddressSuggestionsInput {
  partial_address: string;
}


const getAddressSuggestionsGqlString = gql`
  ${AddressSuggestionsListFragment()}
  ${ErrorResponseFragment()}
  mutation GetAddressSuggestions($data: GetAddressSuggestionsInput!) {
    getAddressSuggestions(input: $data) {
      success
      data {
        ...AddressSuggestionsListFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendGetAddressSuggestionsMutation = (
  apolloClient: ApolloClient<object>,
  inputData: GetAddressSuggestionsInput,
): Promise<{ data: { getAddressSuggestions: GetAddressSuggestionsListResponse} }> => {
  return apolloClient.mutate({
    mutation: getAddressSuggestionsGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { getAddressSuggestions: GetAddressSuggestionsListResponse} }>;
};

export default sendGetAddressSuggestionsMutation
