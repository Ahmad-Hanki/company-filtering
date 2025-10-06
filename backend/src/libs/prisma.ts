import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
// prisma client
export const prisma = new PrismaClient().$extends(withAccelerate());
