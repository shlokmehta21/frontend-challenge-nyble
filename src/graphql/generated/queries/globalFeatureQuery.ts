import { gql, QueryResult, useQuery } from '@apollo/client';
import { GlobalFeature, ErrorResponse } from '../serverModel';
import { GlobalFeatureFragment, ErrorResponseFragment } from '../fragments';

export interface GlobalFeatureResponse {
  success: boolean;
  data?: GlobalFeature;
  error?: ErrorResponse;
}
export interface GlobalFeatureQueryInput {
  global_feature_name: string;
}

const useGlobalFeatureQuery = (
  inputData: GlobalFeatureQueryInput,
  globalFeatureFragment = GlobalFeatureFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{globalFeature: GlobalFeatureResponse}> => {
  const globalFeatureGqlString = gql`
    ${globalFeatureFragment()}
    ${errorResponseFragment()}
    query GlobalFeature($data: GlobalFeatureQueryInput!) {
      globalFeature(data: $data) {
        success
        data {
          ...GlobalFeatureFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{globalFeature: GlobalFeatureResponse}>(globalFeatureGqlString, {
    variables: { data: inputData },
    fetchPolicy: 'no-cache',
  });
};

export default useGlobalFeatureQuery
