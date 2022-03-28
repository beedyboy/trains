import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import accessEnv from "../helpers/accessEnv";
import * as path from "path"; 
import { graphqlUploadExpress } from "graphql-upload";
import  resolvers from "../graphql/resolvers";
import { typeDefs } from "../graphql/schema";
const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();

const origin = "*";
app.use(
  cors({
    allowedHeaders: [
      "Origin",
      " X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "X-Access-Token",
    ],
    exposedHeaders: ["sessionId"],
    origin: origin,
    methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.use(graphqlUploadExpress());  
app.use('/photos', express.static(path.join(__dirname, '..', 'upload')));
apolloServer.start().then((res) => {
  apolloServer.applyMiddleware({ app, path: "/graphql" });
});
 
// apolloServer.applyMiddleware({app, path: "/graphql"});
app.listen(PORT, "0.0.0.0", () => {
  console.info(`Server running on ${PORT}`);
});
