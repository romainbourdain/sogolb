import { PageLayout } from "@/components/tailwind/page-layout";
import { Typography } from "@/components/ui/typography";
import { auth } from "@/features/auth/auth";
import { StatsChart } from "@/features/charts/stats-charts";
import {
  PageAside
} from "@/features/layout/page-layout";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  const name = session?.user.name?.split(" ")[0];
  return (
    <PageLayout className="h-full">
      {/* Stats section */}
      <section>
        <Typography variant="h1" className="mt-10">
          Bienvenue {name}
        </Typography>
      </section>
      <PageAside>
        <Typography variant="h2">Activité</Typography>
        {/* <StreakCalendar /> */}
        <Typography variant="h2">Compétences</Typography>
        <StatsChart />
      </PageAside>
    </PageLayout>
  );
}
