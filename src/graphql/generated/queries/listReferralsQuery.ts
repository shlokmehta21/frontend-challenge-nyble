import { gql, QueryResult, useQuery } from '@apollo/client';
import { ReferralEmailList, ErrorResponse } from '../serverModel';
import { ReferralEmailListFragment, ErrorResponseFragment } from '../fragments';

export interface ListReferralsResponse {
  success: boolean;
  data?: ReferralEmailList;
  error?: ErrorResponse;
}
export interface ListReferralsQueryInput {
  awarded?: boolean;
  page: number;
}

const useListReferralsQuery = (
  inputData: ListReferralsQueryInput,
  referralEmailListFragment = ReferralEmailListFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{listReferrals: ListReferralsResponse}> => {
  const listReferralsGqlString = gql`
    ${referralEmailListFragment()}
    ${errorResponseFragment()}
    query ListReferrals($data: ListReferralsQueryInput!) {
      listReferrals(data: $data) {
        success
        data {
          ...ReferralEmailListFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{listReferrals: ListReferralsResponse}>(listReferralsGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useListReferralsQuery
