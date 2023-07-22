import { ApolloClient, gql } from '@apollo/client';
import { ErrorResponse } from '../serverModel';
import { ErrorResponseFragment } from '../fragments';

export interface BooleanResponse {
  success: boolean;
  data?: boolean;
  error?: ErrorResponse;
}
export interface EnrollContestInput {
  username: string;
}


const enrollContestGqlString = gql`
  ${ErrorResponseFragment()}
  mutation EnrollContest($data: EnrollContestInput!) {
    enrollContest(input: $data) {
      success
      data
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendEnrollContestMutation = (
  apolloClient: ApolloClient<object>,
  inputData: EnrollContestInput,
): Promise<{ data: { enrollContest: BooleanResponse} }> => {
  return apolloClient.mutate({
    mutation: enrollContestGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { enrollContest: BooleanResponse} }>;
};

export default sendEnrollContestMutation
