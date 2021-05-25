import { PrismaClient } from '@todo-starter/prisma-client';

export interface Context {
  prisma: PrismaClient;
}
