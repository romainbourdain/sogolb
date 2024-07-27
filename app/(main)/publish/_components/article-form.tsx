"use client";

import { AutoSizeTextarea } from "@/components/ui/auto-size-textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArticleSchema, type ArticleData } from "@/schemas/publish.schema";

export type ArticleFormProps = {
  defaultValues?: ArticleData;
};

export const ArticleForm = ({ defaultValues }: ArticleFormProps) => {
  const form = useZodForm({
    schema: ArticleSchema,
    defaultValues,
  });

  const onSubmit = async (values: ArticleData) => {};

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Répartition et habitats du kiwi" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <AutoSizeTextarea
                {...field}
                placeholder="Le Kiwi austral vit dans le sud de la Nouvelle-Zélande. On le trouve dans les forêts denses de l'île Stewart, des régions de Southland et de West Coast."
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="backgroundImage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image</FormLabel>
            <FormControl></FormControl>
          </FormItem>
        )}
      />

      <Button type="submit">Créer un article</Button>
    </Form>
  );
};
