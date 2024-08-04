"use server";

import { db } from "@/lib/db";
import { authenticatedActionClient } from "@/lib/safe-actions";
import { z } from "zod";

export const getArticle = authenticatedActionClient
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id } }) => {
    const article = await db.article.findUnique({
      where: { id, published: true },
    });
    return article;
  });

export const getMyArticle = authenticatedActionClient
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
    const article = await db.article.findUnique({
      where: { id, authorId: userId },
    });
    return article;
  });
