import { PageLayout } from "@/components/tailwind/page-layout";
import { Typography } from "@/components/ui/typography";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout>
      <Typography variant="h1">Publier</Typography>
    </PageLayout>
  );
}
