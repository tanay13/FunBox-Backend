import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  // Runs migrations before anything else
  await orm.getMigrator().up();

  const app = express();

  // buildSchema - used for building the schema from the TypeGraphQL definition
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false,
    }),
    //to use em object in resolver
    context: () => ({ em: orm.em }),
  });

  // allows you to react to Apollo Server startup failures by crashing your process instead of starting to serve traffic.

  await apolloServer.start();

  // What applyMiddleware actually do is only add middleware to the path (default /graphql router), so it’s not applied to the whole app.Creates graphql endpoint
  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => {
    console.log("Server started");
  });
};

main().catch((err) => {
  console.error(err);
});
