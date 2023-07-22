import { gql, QueryResult, useQuery } from '@apollo/client';
import { BankAccount, ErrorResponse } from '../serverModel';
import { BankAccountFragment, ErrorResponseFragment } from '../fragments';

export interface BankAccountResponse {
  success: boolean;
  data?: BankAccount;
  error?: ErrorResponse;
}

const useBankAccountQuery = (
  bankAccountFragment = BankAccountFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{bankAccount: BankAccountResponse}> => {
  const bankAccountGqlString = gql`
    ${bankAccountFragment()}
    ${errorResponseFragment()}
    query BankAccount {
      bankAccount {
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

  return useQuery<{bankAccount: BankAccountResponse}>(bankAccountGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useBankAccountQuery
