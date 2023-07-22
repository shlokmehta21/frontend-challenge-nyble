import { ApolloClient, gql } from '@apollo/client';
import { ApplicationIntent, ErrorResponse } from '../serverModel';
import { ApplicationIntentFragment, ErrorResponseFragment } from '../fragments';

export interface ApplicationIntentResponse {
  success: boolean;
  data?: ApplicationIntent;
  error?: ErrorResponse;
}
export interface UpdateBankAccountInput {
  flinksLoginId: string;
}


const updateBankAccountGqlString = gql`
  ${ApplicationIntentFragment()}
  ${ErrorResponseFragment()}
  mutation UpdateBankAccount($data: UpdateBankAccountInput!) {
    updateBankAccount(data: $data) {
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
const sendUpdateBankAccountMutation = (
  apolloClient: ApolloClient<object>,
  inputData: UpdateBankAccountInput,
): Promise<{ data: { updateBankAccount: ApplicationIntentResponse} }> => {
  return apolloClient.mutate({
    mutation: updateBankAccountGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { updateBankAccount: ApplicationIntentResponse} }>;
};

export default sendUpdateBankAccountMutation
