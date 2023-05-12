import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

export * from './user';

export * from './tag';

export * from './post';
