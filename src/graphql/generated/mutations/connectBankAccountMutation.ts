import { ApolloClient, gql } from '@apollo/client';
import { ApplicationIntent, ErrorResponse } from '../serverModel';
import { ApplicationIntentFragment, ErrorResponseFragment } from '../fragments';

export interface ApplicationIntentResponse {
  success: boolean;
  data?: ApplicationIntent;
  error?: ErrorResponse;
}
export interface SubmitBankInfoInput {
  applicationIntentId: string;
  flinksLoginId: string;
}


const connectBankAccountGqlString = gql`
  ${ApplicationIntentFragment()}
  ${ErrorResponseFragment()}
  mutation ConnectBankAccount($data: SubmitBankInfoInput!) {
    connectBankAccount(data: $data) {
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
const sendConnectBankAccountMutation = (
  apolloClient: ApolloClient<object>,
  inputData: SubmitBankInfoInput,
): Promise<{ data: { connectBankAccount: ApplicationIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: connectBankAccountGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { connectBankAccount: ApplicationIntentResponse} }>;
};

export default sendConnectBankAccountMutation
