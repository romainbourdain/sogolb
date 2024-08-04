"use server";

import { db } from "@/lib/db";
import { authenticatedActionClient } from "@/lib/safe-actions";
import { ArticleFormSchema } from "./publish.schema";

export const publishArticle = authenticatedActionClient
  .schema(ArticleFormSchema)
  .action(async ({ parsedInput, ctx: { userId } }) => {
    const result = await db.article.create({
      data: {
        ...parsedInput,
        content: "",
        authorId: userId,
      },
    });
    return result;
  });
