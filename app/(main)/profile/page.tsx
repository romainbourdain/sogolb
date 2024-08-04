import { PageLayout } from "@/components/tailwind/page-layout";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";
import { defaultBanner } from "@/constants";
import { StatsChart } from "@/features/charts/stats-charts";
import StreakCalendar from "@/features/charts/streak-calendar";
import { LazyBanner } from "@/features/profile/lazy-banner";
import { LazyProfilePicture } from "@/features/profile/lazy-profile-picture";
import { db } from "@/lib/db";
import { getDefaultUserName } from "@/lib/utils";
import type { PageParams } from "@/types/next";
import { Pen } from "lucide-react";
import Image from "next/image";

export default async function RoutePage(props: PageParams<{}>) {
  const profileData = await db.user.findUnique({
    where: {
      id: "1",
    },
    include: {
      badges: true,
      activity: true,
      events: true,
    },
  });
  // console.log(profileData);
  if (!profileData) {
    throw new Error("Profile data not found");
  }
  const profile = profileData;
  console.log(profile);
  // if (!profileData?.data) {
  //   throw new Error("Profile data not found");
  // }

  // const profile = profileData.data;

  return (
    <PageLayout className="h-full space-y-10 pb-20">
      {/* Headers */}
      <div>
        <div className="relative mb-5">
          {/* Banner */}
          <LazyBanner image={profile.banner || defaultBanner} />
          {/* Picture */}
          <div className="absolute bottom-0 left-[2%] translate-y-1/2">
            <LazyProfilePicture image={profile.image} name={profile.name} />
          </div>
        </div>

        {/* Edit button */}
        <div className="mb-7 flex w-full justify-end px-4">
          <Button size="sm">
            <Pen className="mr-2" size={16} />
            Modifier
          </Button>
        </div>

        {/* More informations */}
        <div className="mx-5 flex justify-between">
          {/* Names */}
          <div>
            <div className="flex items-baseline justify-center space-x-3">
              <Typography variant="h2" className="flex items-center">
                {profile.name}
              </Typography>
              {/* Badges */}
              <div className="flex h-full items-center justify-center space-x-1">
                {profile.badges.map((badge) => (
                  <TooltipProvider key={badge.id} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          src={badge.image}
                          alt={badge.name}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </TooltipTrigger>
                      <TooltipContent>{badge.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            <Typography
              variant="h3"
              className="font-light text-muted-foreground"
            >
              @{getDefaultUserName(profile.name || "")}
            </Typography>
          </div>
        </div>

        {/* Contents */}
        <div className="mx-5">
          <p className="text-base font-light">
            {profile.bio || "Aucune description"}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-5">
        <div
          className="grid grid-cols-1
        gap-3 md:grid-cols-5"
        >
          <StreakCalendar
            className="col-span-1 md:col-span-3"
            activity={profile.activity}
          />
          <StatsChart className="col-span-1 md:col-span-2" />
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-5">
        <Typography variant="h2">Activité récente</Typography>
        {/* <LazyProfileEvents image={profile} name={profile.name} /> */}
      </div>
    </PageLayout>
  );
}
