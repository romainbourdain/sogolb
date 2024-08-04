import { getUserByIdAction } from "@/actions/auth.action";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user }) {
      const existingUser = await getUserByIdAction(user.id);

      if (!existingUser) return false;

      return true;
    },
    async jwt({ token, user, profile }) {
      return token;
    },
    async session({ token, session }) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
  },
  ...authConfig,
});
