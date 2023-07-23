import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface WoofResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface WoofInput {
  timestamp?: string;
}


const woofGqlString = gql`
  ${ErrorResponseFragment()}
  mutation Woof($data: WoofInput!) {
    woof(data: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendWoofMutation = (
  apolloClient: ApolloClient<object>,
  inputData: WoofInput,
): Promise<{ data: { woof: WoofResponse} }> => {
  return apolloClient.mutate({
    mutation: woofGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { woof: WoofResponse} }>;
};

export default sendWoofMutation
