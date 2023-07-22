import { ApolloClient, gql } from '@apollo/client';
import { Card3DSData, ErrorResponse } from '../serverModel';
import { Card3DSDataFragment, ErrorResponseFragment } from '../fragments';

export interface Card3DSDataResponse {
  success: boolean;
  data?: Card3DSData;
  error?: ErrorResponse;
}
export interface Continue3DSInputType {
  payment_method_id: string;
}


const continue3DSGqlString = gql`
  ${Card3DSDataFragment()}
  ${ErrorResponseFragment()}
  mutation Continue3DS($data: Continue3DSInputType!) {
    continue3DS(data: $data) {
      success
      data {
        ...Card3DSDataFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendContinue3DSMutation = (
  apolloClient: ApolloClient<object>,
  inputData: Continue3DSInputType,
): Promise<{ data: { continue3DS: Card3DSDataResponse} }> => {
  return apolloClient.mutate({
    mutation: continue3DSGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { continue3DS: Card3DSDataResponse} }>;
};

export default sendContinue3DSMutation
