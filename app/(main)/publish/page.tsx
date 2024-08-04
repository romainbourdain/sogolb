import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import type { PageParams } from "@/types/next";
import { ArticleForm } from "./_form/article-form";
import { FormLayout } from "./_form/form-layout";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="mx-auto max-w-screen-xl space-y-4 p-4">
      <Typography variant="h2">Publier</Typography>
      <Tabs defaultValue="article">
        <TabsList>
          <TabsTrigger value="article">Article</TabsTrigger>
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="project">Projet</TabsTrigger>
        </TabsList>
        <TabsContent value="article">
          <ArticleForm />
        </TabsContent>
        <TabsContent value="formation">
          <FormLayout title="Formation"></FormLayout>
        </TabsContent>
        <TabsContent value="project">
          <FormLayout title="Projet"></FormLayout>
        </TabsContent>
      </Tabs>
    </div>
  );
}
