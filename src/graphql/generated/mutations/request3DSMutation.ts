import { ApolloClient, gql } from '@apollo/client';
import { Card3DSData, ErrorResponse } from '../serverModel';
import { Card3DSDataFragment, ErrorResponseFragment } from '../fragments';

export interface Card3DSDataResponse {
  success: boolean;
  data?: Card3DSData;
  error?: ErrorResponse;
}
export interface Request3DSInputType {
  payment_method_id: string;
}


const request3DSGqlString = gql`
  ${Card3DSDataFragment()}
  ${ErrorResponseFragment()}
  mutation Request3DS($data: Request3DSInputType!) {
    request3DS(input: $data) {
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
const sendRequest3DSMutation = (
  apolloClient: ApolloClient<object>,
  inputData: Request3DSInputType,
): Promise<{ data: { request3DS: Card3DSDataResponse} }> => {
  return apolloClient.mutate({
    mutation: request3DSGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { request3DS: Card3DSDataResponse} }>;
};

export default sendRequest3DSMutation
