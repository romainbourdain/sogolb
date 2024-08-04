"use server";

import { auth } from "./auth";

export const getSession = async () => {
  const session = await auth();

  return session;
};

export const getUser = async () => {
  const session = await getSession();

  if (!session?.user.id) return null;

  return session.user;
};
