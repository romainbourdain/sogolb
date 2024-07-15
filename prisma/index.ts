import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// To ensure TypeScript treats this file as a module
export {};
