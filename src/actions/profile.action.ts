"use server";

import { db } from "@/lib/db";
import { ActionError, authenticatedActionClient } from "@/lib/safe-actions";
import { z } from "zod";

export const getProfile = authenticatedActionClient
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id } }) => {
    const res = await db.user.findUnique({ where: { id } });

    if (!res) {
      throw new ActionError("Profile not found");
    }

    // TODO: vérifier le type de retour
    return res;
  });

// TODO : implémenter action sans paramètres
export const getMyProfile = authenticatedActionClient.action(
  async ({ ctx: { id } }) => {
    const profile = await getProfile({ id });
    if (!profile?.data) {
      throw new ActionError("Profile not found");
    }

    return profile.data;
  }
);
