import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { ArticleForm } from "./article-form";

export const PublishTabs = () => {
  return (
    <Tabs defaultValue="article" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="article">Article</TabsTrigger>
        <TabsTrigger value="course">Cours</TabsTrigger>
      </TabsList>
      <TabsContent value="article">
        <Card>
          <CardHeader>
            <Typography variant="h2">Article</Typography>
          </CardHeader>
          <CardContent>
            <ArticleForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="course">
        <Card>
          <CardHeader>
            <Typography variant="h2">Cours</Typography>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
