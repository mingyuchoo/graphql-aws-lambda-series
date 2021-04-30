import { ApolloServer, gql } from 'apollo-server-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: true,
  introspection: true,
});

const options = {
  cors: {
    origin: '*',
    credentials: true,
  },
};

exports.handler = (event, lambdaContext, callback) => {
  // Playground handler
  if (event.httpMethod === 'GET') {
    server.createHandler(options)(
      { ...event, path: event.requestContext.path || event.path },
      lambdaContext,
      callback
    );
  } else {
    server.createHandler(options)(event, lambdaContext, callback);
  }
};
