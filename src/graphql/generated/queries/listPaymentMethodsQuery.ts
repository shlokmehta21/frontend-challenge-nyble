import { gql, QueryResult, useQuery } from '@apollo/client';
import { PaymentMethodTypeType, PaymentMethodsList, ErrorResponse } from '../serverModel';
import { PaymentMethodsListFragment, ErrorResponseFragment } from '../fragments';

export interface PaymentMethodListResponse {
  success: boolean;
  data?: PaymentMethodsList;
  error?: ErrorResponse;
}
export interface PaymentMethodInput {
  type?: keyof PaymentMethodTypeType;
}

const useListPaymentMethodsQuery = (
  inputData: PaymentMethodInput,
  paymentMethodsListFragment = PaymentMethodsListFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{listPaymentMethods: PaymentMethodListResponse}> => {
  const listPaymentMethodsGqlString = gql`
    ${paymentMethodsListFragment()}
    ${errorResponseFragment()}
    query ListPaymentMethods($data: PaymentMethodInput!) {
      listPaymentMethods(filter: $data) {
        success
        data {
          ...PaymentMethodsListFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{listPaymentMethods: PaymentMethodListResponse}>(listPaymentMethodsGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useListPaymentMethodsQuery
