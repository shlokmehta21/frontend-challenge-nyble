import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, ApolloProvider } from '@apollo/client';


import { Response } from './types';
import { ERROR_CODES } from './errorCodes';
import { useStandardToast } from 'components/widget/toast/Toast';
import { OperationDefinitionNode } from 'graphql/language/ast';
import CustomRetryLink from './customRetryLink';

import { useHistory } from 'react-router-dom';

type CustomApolloProviderPropsType = {
  children: React.ReactNode;
};

const CustomApolloProvider = ({ children }: CustomApolloProviderPropsType) => {
  const [errorToast] = useStandardToast();

  const history = useHistory();


  // This link is for setting an idempotency key on headers
  const idempotencyLink = setContext((operation, { headers }) => {
    let addIdempotencyKey = false;
    for (const documentNode of operation.query.definitions as Array<OperationDefinitionNode>) {
      if (documentNode.operation === 'mutation') {
        addIdempotencyKey = true;
      }
    }
    return {
      headers: {
        ...headers,
        ...(addIdempotencyKey && { 'nyble-idempotency-key': `${uuidv4()}` }),
      },
    };
  });

  // If our graphql server responds, it will always return a network response with code 200
  // even if the 'actual' code isn't (the server returns another code in the response body)
  // This link if only useful for if requests really fail, as in if it gets blocked by CORS
  // or if someone messes up query syntax
  const networkResponseErrorLink = onError((errors) => {
    if (errors.graphQLErrors) {
      errorToast();
      errors.graphQLErrors.map(({ message, locations, path }) => {
        console.log(`[GQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        return null;
      });
    }
    if (errors.networkError) {
      if (!errors.graphQLErrors) {
        errorToast();
      }
      console.log(errors.networkError);
    }
    //history.push(`?${JSON.stringify(errors)}`);
  });

  // This link is for catching actual application level errors from the server
  const responseErrorLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response: Response<any, any>) => {
      let innerData = response.data[Object.keys(response.data)[0]];
      return response;
    });
  });

  const retryLink = new CustomRetryLink();

  const httpLink = new HttpLink({
    uri: 'https://sbx-api.nyble.cloud/fedd',
  });

  const link = ApolloLink.from([
    idempotencyLink,
    responseErrorLink,
    networkResponseErrorLink,
    retryLink,
    httpLink,
  ]);

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
