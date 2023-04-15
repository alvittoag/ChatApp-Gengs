import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://exciting-troll-85.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "MfGFkdA2pZd4MIAxV1rvXTG1B5v87FJzGtWO47vIDSz42AVipXZzfPzT0uJy1e36",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://exciting-troll-85.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "MfGFkdA2pZd4MIAxV1rvXTG1B5v87FJzGtWO47vIDSz42AVipXZzfPzT0uJy1e36",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
