"use server";

import { User } from "@prisma/client";
import { db } from "./db";

export const getEvents = async (user: User, offset: number, limit: number) => {
  return db.event.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: offset,
    take: limit,
  });
};
