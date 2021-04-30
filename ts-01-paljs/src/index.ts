import { ApolloServer } from 'apollo-server-lambda';

import { createContext } from './context';
import { schema } from './nexusSchema';

const server = new ApolloServer({
  schema,
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
