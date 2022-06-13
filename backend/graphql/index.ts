import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import http from "http";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const setupApolloServer = (app) => {
  const httpServer = http.createServer(app);

  const apolloConfig = {
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: true,
    playground: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      // ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  };

  const apolloServer = new ApolloServer(apolloConfig);

  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app });
  });
};
