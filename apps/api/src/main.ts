import * as express from 'express';
import { server as apolloServer } from './graphql/server';

const app = express();

apolloServer.applyMiddleware({ app });

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
