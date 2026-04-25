import { PrismaClient } from '@prisma/client';
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg';
import 'dotenv/config';

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    throw new Error('DATABASE_URL is not defined in .env');
  }

  const adapter = new PrismaPostgresAdapter({ connectionString });
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
