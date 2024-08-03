import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";
import { auth } from "../auth/auth";

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleReturnedServerError(e) {
    if (e instanceof ActionError) {
      return e.message;
    }
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

export const authenticatedActionClient = actionClient.use(async ({ next }) => {
  const session = await auth();
  if (!session?.user) throw new ActionError("Unauthorized");

  return next({ ctx: { id: session.user.id } });
});
