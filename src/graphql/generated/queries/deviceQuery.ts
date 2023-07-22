import { gql, QueryResult, useQuery } from '@apollo/client';
import { Device, ErrorResponse } from '../serverModel';
import { DeviceFragment, ErrorResponseFragment } from '../fragments';

export interface DeviceResponse {
  success: boolean;
  data?: Device;
  error?: ErrorResponse;
}
export interface DeviceQueryInput {
  deviceId: string;
}

const useDeviceQuery = (
  inputData: DeviceQueryInput,
  deviceFragment = DeviceFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{device: DeviceResponse}> => {
  const deviceGqlString = gql`
    ${deviceFragment()}
    ${errorResponseFragment()}
    query Device($data: DeviceQueryInput!) {
      device(data: $data) {
        success
        data {
          ...DeviceFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{device: DeviceResponse}>(deviceGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useDeviceQuery
