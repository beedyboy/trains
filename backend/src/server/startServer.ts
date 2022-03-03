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

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
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
