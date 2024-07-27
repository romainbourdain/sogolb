import { PageLayout } from "@/components/tailwind/page-layout";
import { Typography } from "@/components/ui/typography";
import { StatsChart } from "@/features/charts/stats-charts";
import StreakCalendar from "@/features/charts/streak-calendar";
import { auth } from "@/lib/auth";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  const name = session?.user.name?.split(" ")[0];
  return (
    <PageLayout className="h-full">
      {/* Stats section */}
      <section>
        <Typography variant="h1" className="mb-5 mt-10 ml-3">
          Bienvenue {name}
        </Typography>
        <div className="grid grid-cols-5 gap-3">
          <StreakCalendar className="col-span-3" />
          <StatsChart className="col-span-2" />
        </div>
      </section>
      {/* Récent */}
    </PageLayout>
  );
}
