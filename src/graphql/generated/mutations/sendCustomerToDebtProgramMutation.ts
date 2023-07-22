import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}


const sendCustomerToDebtProgramGqlString = gql`
  ${ErrorResponseFragment()}
  mutation SendCustomerToDebtProgram {
    sendCustomerToDebtProgram {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendSendCustomerToDebtProgramMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { sendCustomerToDebtProgram: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: sendCustomerToDebtProgramGqlString,
  }) as Promise<{ data: { sendCustomerToDebtProgram: BooleanResponse} }>;
};

export default sendSendCustomerToDebtProgramMutation
