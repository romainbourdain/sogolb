import { auth } from "@/auth/auth";
import {
  PageAside,
  PageContainer,
  PageHeader,
} from "@/components/layout/page-layout";
import { Typography } from "@/components/ui/typography";
import { StatsChart } from "@/features/charts/stats-charts";
import StreakCalendar from "@/features/charts/streak-calendar";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  const name = session?.user.name?.split(" ")[0];
  return (
    <PageContainer>
      <div>
        <PageHeader />
        <Typography variant="h1" className="mb-5 ml-3 mt-10">
          Bienvenue {name}
        </Typography>
      </div>
      <PageAside>
        <Typography variant="h2">Activité</Typography>
        <StreakCalendar />
        <Typography variant="h2">Compétences</Typography>
        <StatsChart />
      </PageAside>
    </PageContainer>
  );
}
