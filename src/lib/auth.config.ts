import { getUserByEmailAction } from "@/actions/auth.action";
import { LoginSchema } from "@/schemas/auth.schema";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "./env";

class InvalidLoginError extends CredentialsSignin {
  message = "Invalid identifier or password";
}

export const authConfig = {
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const res = await getUserByEmailAction(email);
        if (!res?.data?.password) throw new InvalidLoginError();

        const passwordMatch = await bcrypt.compare(password, res.data.password);
        if (!passwordMatch) throw new InvalidLoginError();

        return res.data;
      },
    }),
  ],
} satisfies NextAuthConfig;
