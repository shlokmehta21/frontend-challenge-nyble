import { ApolloClient, gql } from '@apollo/client';
import { Device, ErrorResponse } from '../serverModel';
import { DeviceFragment, ErrorResponseFragment } from '../fragments';

export interface DeviceResponse {
  success: boolean;
  data?: Device;
  error?: ErrorResponse;
}
export interface EnableNotificationsInput {
  notificationKey: string;
  deviceId: string;
}


const enableNotificationsGqlString = gql`
  ${DeviceFragment()}
  ${ErrorResponseFragment()}
  mutation EnableNotifications($data: EnableNotificationsInput!) {
    enableNotifications(data: $data) {
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
const sendEnableNotificationsMutation = (
  apolloClient: ApolloClient<object>,
  inputData: EnableNotificationsInput,
): Promise<{ data: { enableNotifications: DeviceResponse} }> => {
  return apolloClient.mutate({
    mutation: enableNotificationsGqlString,
    variables: { data: { ...inputData } },
  }) as Promise<{ data: { enableNotifications: DeviceResponse} }>;
};

export default sendEnableNotificationsMutation
