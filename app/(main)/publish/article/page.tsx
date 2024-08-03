import { PageLayout } from "@/components/tailwind/page-layout";
import { TextEditor } from "@/components/ui/text-editor";
import { Typography } from "@/components/ui/typography";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="flex h-full flex-col space-y-6 py-6">
      <Typography variant="h1">Article</Typography>

      <TextEditor />
    </PageLayout>
  );
}
