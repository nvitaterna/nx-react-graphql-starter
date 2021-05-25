import { ApolloServer } from 'apollo-server-express';
import { Context } from './context';
import { prisma } from './prisma';
import { schema } from './schema';

export const server = new ApolloServer({
  schema: schema,
  context: (): Context => {
    return {
      prisma,
    };
  },
});
