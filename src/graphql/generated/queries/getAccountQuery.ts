import { gql, QueryResult, useQuery } from '@apollo/client';
import { BankAccount, ErrorResponse } from '../serverModel';
import { BankAccountFragment, ErrorResponseFragment } from '../fragments';

export interface BankAccountResponse {
  success: boolean;
  data?: BankAccount;
  error?: ErrorResponse;
}

const useGetAccountQuery = (
  bankAccountFragment = BankAccountFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{getAccount: BankAccountResponse}> => {
  const getAccountGqlString = gql`
    ${bankAccountFragment()}
    ${errorResponseFragment()}
    query GetAccount {
      getAccount {
        success
        data {
          ...BankAccountFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{getAccount: BankAccountResponse}>(getAccountGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useGetAccountQuery
