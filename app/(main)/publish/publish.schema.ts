import { z } from "zod";

export const ArticleFormSchema = z.object({
  title: z.string().min(1, { message: "Un titre est requis" }),
  description: z.string(),
});

export type ArticleFormValues = z.infer<typeof ArticleFormSchema>;
