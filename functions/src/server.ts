import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors({
  credentials: true,
  origin: ['*'],
  methods: ['GET', 'POST']
}));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

export { app };
