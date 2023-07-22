import { ApolloClient, gql } from '@apollo/client';
import { Token, ErrorResponse } from '../serverModel';
import { TokenFragment, ErrorResponseFragment } from '../fragments';

export interface DeviceLoginResponse {
  success: boolean;
  data?: Token;
  error?: ErrorResponse;
}
export interface DeviceLoginInput {
  customer_id: string;
  device_secret: string;
}


const loginDeviceGqlString = gql`
  ${TokenFragment()}
  ${ErrorResponseFragment()}
  mutation LoginDevice($data: DeviceLoginInput!) {
    loginDevice(data: $data) {
      success
      data {
        ...TokenFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendLoginDeviceMutation = (
  apolloClient: ApolloClient<object>,
  inputData: DeviceLoginInput,
): Promise<{ data: { loginDevice: DeviceLoginResponse} }> => {
  return apolloClient.mutate({
    mutation: loginDeviceGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { loginDevice: DeviceLoginResponse} }>;
};

export default sendLoginDeviceMutation
