import { createSafeActionClient } from "next-safe-action";
import { auth } from "./auth";

export class ActionError extends Error {}

export const actionClient = createSafeActionClient();

export const authenticatedActionClient = createSafeActionClient().use(
  async ({ next }) => {
    const session = await auth();
    if (!session?.user.id) throw new Error("Invalid session");
    return next({ ctx: { userId: session.user.id } });
  }
);
