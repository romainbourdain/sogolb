import { PageLayout } from "@/components/tailwind/page-layout";
import { Typography } from "@/components/ui/typography";
import type { PageParams } from "@/types/next";
import { PublishTabs } from "./_components/publish-tabs";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="space-y-10 py-10">
      <Typography variant="h1">Publier</Typography>
      <PublishTabs />
    </PageLayout>
  );
}
