import { auth } from "@/auth/auth";
import { Island } from "@/components/layout/island";
import { Search } from "@/components/layout/search";
import { Typography } from "@/components/ui/typography";
import { StatsChart } from "@/features/charts/stats-charts";
import StreakCalendar from "@/features/charts/streak-calendar";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  const name = session?.user.name?.split(" ")[0];
  return (
    <div className="grid h-full grid-cols-[1fr_auto] gap-4">
      <div>
        <Search />
        <Typography variant="h1" className="mb-5 ml-3 mt-10">
          Bienvenue {name}
        </Typography>
      </div>
      <Island>
        <Typography variant="h2">Activité</Typography>
        <StreakCalendar />
        <Typography variant="h2">Compétences</Typography>
        <StatsChart />
      </Island>
    </div>
  );
}
