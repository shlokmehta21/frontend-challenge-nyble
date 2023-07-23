import { gql } from '@apollo/client';

/*************************************************************************************
  These are standard gql fragments for querying all the fields on our backend objects

  Note:
  - These are built to have to option to be customized. To override a subfragment,
    make a subfragment with the same name as the one being overridden as a function,
    and pass it in to the parent fragment subfragmentOverrides

    eg. const ErrorFragment = () => gql`
      fragment ErrorFragment on ErrorResponse {
        code
        // Note we omitted fields to customize this query
      }
    `

    ParentFragment({errorFragment: ErrorFragment})

*************************************************************************************/


export const BankAccountFragment = () => gql`
  fragment BankAccountFragment on BankAccount {
    balance
    currency
    status
  }
`;

export const ErrorResponseFragment = () => gql`
  fragment ErrorResponseFragment on ErrorResponse {
    code
    name
    detail
    service
    flow
  }
`;

export const RewardsAccountFragment = () => gql`
  fragment RewardsAccountFragment on RewardsAccount {
    bones
  }
`;
