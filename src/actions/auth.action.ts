"use server";

import { signIn, signOut } from "@/lib/auth";
import { db } from "@/lib/db";
import { action } from "@/lib/safe-actions";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { LoginSchema, RegisterSchema } from "../schemas/auth.schema";

export const signInAction = action
  .schema(z.string().nullable())
  .action(async ({ parsedInput: provider_id }) => {
    try {
      await signIn(provider_id);
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`auth/error?error=${error.type}`);
      }
      throw error;
    }
  });

export const signInWithEmailAndPasswordAction = action
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
      return { success: "Email sent" };
    } catch (error) {
      if (error instanceof AuthError) {
        if (error.cause?.err instanceof Error) {
          return { error: error.cause.err.message };
        }
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid email or password" };
          default:
            return { error: "Something went wrong" };
        }
      }
      throw error;
    }
  });

export const registerAction = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmailAction(email);

    if (existingUser) {
      return { error: "Email already in use" };
    }

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return { success: "Email sent" };
  });

// TODO: send verification email

export const signOutAction = action.action(async () => {
  await signOut();
});

export const getUserByIdAction = action
  .schema(z.string())
  .action(async ({ parsedInput: id }) => {
    return db.user.findUnique({
      where: {
        id,
      },
    });
  });

export const getUserByEmailAction = action
  .schema(z.string())
  .action(async ({ parsedInput: email }) => {
    return db.user.findUnique({
      where: {
        email,
      },
    });
  });
