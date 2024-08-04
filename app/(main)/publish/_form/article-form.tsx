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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { publishArticle } from "../publish.action";
import type { ArticleFormValues } from "../publish.schema";
import { ArticleFormSchema } from "../publish.schema";
import { FormLayout } from "./form-layout";

export const ArticleForm = () => {
  const router = useRouter();
  const form = useZodForm({
    schema: ArticleFormSchema,
  });

  const onSubmit = async (val: ArticleFormValues) => {
    const result = await publishArticle(val);
    if (!result?.data) return toast.error("Une erreur est survenue");
    toast.success("Article publié");
    router.push(`/article/${result.data.id}/edit`);
  };

  return (
    <FormLayout title="Article">
      <Form form={form} onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <AutoSizeTextarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" loading={form.formState.isSubmitting}>
          Publier
        </Button>
      </Form>
    </FormLayout>
  );
};
