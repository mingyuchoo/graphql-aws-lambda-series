import { ApolloServer, gql } from 'apollo-server-lambda';
import { APIGatewayProxyCallback, APIGatewayProxyEvent, Context as LambdaContext } from 'aws-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (_parent, _args, _context, _info) => {
      return 'Hello world!';
    },
  },
};

type GraphQLServerOptionsArgs = {
  event: APIGatewayProxyEvent;
  context: LambdaContext;
};

const createContext = ({ event, context }: GraphQLServerOptionsArgs) => {
  return {
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
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
    server.createHandler(options)({ ...event, path: event.requestContext.path || event.path }, lambdaContext, callback);
  } else {
    server.createHandler(options)(event, lambdaContext, callback);
  }
};
