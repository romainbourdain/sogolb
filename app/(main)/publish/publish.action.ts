"use server";

import { authenticatedActionClient } from "@/lib/safe-actions";
import { ArticleSchema } from "./publish.schema";

export const createArticle = authenticatedActionClient
  .schema(ArticleSchema)
  .action(async ({ parsedInput, ctx: { userId } }) => {});
