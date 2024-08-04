import { Typography } from "@/components/ui/typography";
import { auth } from "@/features/auth/auth";
import { StatsChart } from "@/features/charts/stats-charts";
import StreakCalendar from "@/features/charts/streak-calendar";
import {
  PageAside,
  PageContainer,
  PageHeader,
} from "@/features/layout/page-layout";
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
