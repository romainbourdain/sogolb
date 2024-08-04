import { PageLayout } from "@/components/tailwind/page-layout";
import { Typography } from "@/components/ui/typography";
import { auth } from "@/features/auth/auth";
import { StatsChart } from "@/features/charts/stats-charts";
import {
  PageAside,
  PageContainer,
  PageContent,

} from "@/features/layout/page-layout";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  const name = session?.user.name?.split(" ")[0];
  return (
    <PageContainer>
      <PageContent>
        <Typography variant="h1" className="px-4">
          Bienvenue {name}
        </Typography>
      </PageContent>
      <PageAside>
        <Typography variant="h2">Activité</Typography>
        {/* <StreakCalendar /> */}
        <Typography variant="h2">Compétences</Typography>
        <StatsChart />
      </PageAside>
    </PageLayout>
  );
}
