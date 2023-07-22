import { ApolloClient, gql } from '@apollo/client';
import { EPAdvance, ErrorResponse } from '../serverModel';
import { EPAdvanceFragment, ErrorResponseFragment } from '../fragments';

export interface EPAdvanceResponse {
  success: boolean;
  data?: EPAdvance;
  error?: ErrorResponse;
}
export interface RepayAdvanceInput {
  advanceId: string;
}


const repayAdvanceGqlString = gql`
  ${EPAdvanceFragment()}
  ${ErrorResponseFragment()}
  mutation RepayAdvance($data: RepayAdvanceInput!) {
    repayAdvance(input: $data) {
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
const sendRepayAdvanceMutation = (
  apolloClient: ApolloClient<object>,
  inputData: RepayAdvanceInput,
): Promise<{ data: { repayAdvance: EPAdvanceResponse} }> => {
  return apolloClient.mutate({
    mutation: repayAdvanceGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { repayAdvance: EPAdvanceResponse} }>;
};

export default sendRepayAdvanceMutation
