import { z } from "zod";

export const ArticleSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Un titre est requis" })
    .max(100, { message: "Le titre ne doit pas dépasser 100 caractères" }),
  description: z.string().optional(),
  backgroundImage: z.string().optional(),
});

export type ArticleData = z.infer<typeof ArticleSchema>;
