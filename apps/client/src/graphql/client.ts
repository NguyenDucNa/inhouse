import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Kind, OperationTypeNode } from 'graphql';
import { setContext } from '@apollo/client/link/context';
import { getValidAccessToken } from '@client/module/auth/auth.ts';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL as string,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_GRAPHQL_WS as string,
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === Kind.OPERATION_DEFINITION &&
      definition.operation === OperationTypeNode.SUBSCRIPTION
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const accessToken = await getValidAccessToken();

  if (!accessToken) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      headers: headers,
    };
  }

  // return the headers to the context so httpLink can read them
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
});
