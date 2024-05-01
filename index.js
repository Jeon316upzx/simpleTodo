import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"
import  dotenv from "dotenv"
import connectDB from './mongodb/connectDB.js';
import typeDefs from './schema.js';
import resolvers from "./resolvers.js"
dotenv.config()

const PORT = process.env.PORT || 4000
connectDB
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});


export const graphqlHandler = server.createHandler();



