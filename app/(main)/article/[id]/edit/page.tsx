import { Typography } from "@/components/ui/typography";
import { PageContainer, PageContent } from "@/features/layout/page-layout";
import type { PageParams } from "@/types/next";
import { notFound } from "next/navigation";
import { getMyArticle } from "../../article.action";

export default async function RoutePage({
  params: { id },
}: PageParams<{ id: string }>) {
  const article = await getMyArticle({ id });
  if (!article?.data) notFound();

  return (
    <PageContainer>
      <PageContent>
        <Typography variant="h1">{article.data.title}</Typography>
        <Typography variant="base">{article.data.description}</Typography>
      </PageContent>
    </PageContainer>
  );
}
