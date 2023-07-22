import { ApolloClient, gql } from '@apollo/client';
import { Subscription, ErrorResponse } from '../serverModel';
import { SubscriptionFragment, ErrorResponseFragment } from '../fragments';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: ErrorResponse;
}


const resumeSubscriptionGqlString = gql`
  ${SubscriptionFragment()}
  ${ErrorResponseFragment()}
  mutation ResumeSubscription {
    resumeSubscription {
      success
      data {
        ...SubscriptionFragment
      }
      error {
        ...ErrorResponseFragment
      }
    }
  }
`;
const sendResumeSubscriptionMutation = (
  apolloClient: ApolloClient<object>,
): Promise<{ data: { resumeSubscription: SubscriptionResponse} }> => {
  return apolloClient.mutate({
    mutation: resumeSubscriptionGqlString,
  }) as Promise<{ data: { resumeSubscription: SubscriptionResponse} }>;
};

export default sendResumeSubscriptionMutation
