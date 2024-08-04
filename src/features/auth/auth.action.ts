"use server";

import { db } from "@/lib/db";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
  });

  return user;
};

export const signInAction = async ({
  provider_id,
}: {
  provider_id?: string;
}) => {
  try {
    await signIn(provider_id);
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`auth/error?error=${error.type}`);
    }
    throw error;
  }
};

export const signOutAction = async () => {
  await signOut();
};

export const getSession = async () => {
  const session = await auth();

  return session;
};

export const getAuth = async () => {
  const session = await getSession();

  if (!session?.user.id) return null;

  return session.user;
};
