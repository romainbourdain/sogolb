"use server";

import { db } from "@/lib/db";
import { ActionError, authenticatedActionClient } from "@/lib/safe-actions";
import { User } from "@prisma/client";
import { z } from "zod";

export const getProfile = authenticatedActionClient
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id } }) => {
    const res = await db.user.findUnique({
      where: { id },
      include: {
        badges: true,
      },
    });
    if (!res) {
      throw new ActionError("Profile not found");
    }

    // TODO: vérifier le type de retour
    return res;
  });

export const getMyProfile = authenticatedActionClient.action(
  async ({ ctx: { id } }) => {
    if (!id) throw new ActionError();
    const profile = await getProfile({ id });
    if (!profile?.data) {
      throw new ActionError("Profile not found");
    }

    return profile.data;
  }
);

export const getEvents = async (user: User, offset: number, limit: number) => {
  try {
    const totalEvents = await db.event.count({
      where: {
        userId: user.id,
      },
    });

    if (offset >= totalEvents) {
      return [];
    }

    const events = await db.event.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: offset,
      take: limit,
    });

    return events;
  } catch (error) {
    throw new Error("Error while fetching events.");
  }
};
