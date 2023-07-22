import { ApolloClient, gql } from '@apollo/client';
import { CardSetupData, ErrorResponse } from '../serverModel';
import { CardSetupDataFragment, ErrorResponseFragment } from '../fragments';

export interface CardSetupDataResponse {
  success: boolean;
  data?: CardSetupData;
  error?: ErrorResponse;
}


const startCardSetupGqlString = gql`
  ${CardSetupDataFragment()}
  ${ErrorResponseFragment()}
  mutation StartCardSetup {
    startCardSetup {
      success
      data {
        ...CardSetupDataFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendStartCardSetupMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { startCardSetup: CardSetupDataResponse} }> => {
  return apolloClient.mutate({
    mutation: startCardSetupGqlString,
  }) as Promise<{ data: { startCardSetup: CardSetupDataResponse} }>;
};

export default sendStartCardSetupMutation
