import { ApolloClient, gql } from '@apollo/client';
import { Device, ErrorResponse } from '../serverModel';
import { DeviceFragment, ErrorResponseFragment } from '../fragments';

export interface DeviceResponse {
  success: boolean;
  data?: Device;
  error?: ErrorResponse;
}
export interface RegisterDeviceLoginInput {
  model?: string;
  name?: string;
  manufacturer?: string;
}


const registerLoginDeviceGqlString = gql`
  ${DeviceFragment()}
  ${ErrorResponseFragment()}
  mutation RegisterLoginDevice($data: RegisterDeviceLoginInput!) {
    registerLoginDevice(data: $data) {
      success
      data {
        ...DeviceFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendRegisterLoginDeviceMutation = (
  apolloClient: ApolloClient<object>,
  inputData: RegisterDeviceLoginInput,
): Promise<{ data: { registerLoginDevice: DeviceResponse} }> => {
  return apolloClient.mutate({
    mutation: registerLoginDeviceGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { registerLoginDevice: DeviceResponse} }>;
};

export default sendRegisterLoginDeviceMutation
