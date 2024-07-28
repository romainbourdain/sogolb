import { getMyProfile } from "@/actions/profile.action";
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
import Connector from "@/features/history/connector";
import MajorEvent from "@/features/history/major-event";
import MinorEvent from "@/features/history/minor-event";
import { LazyBanner } from "@/features/profile/lazy-banner";
import { LazyProfilePicture } from "@/features/profile/lazy-profile-picture";
import { getDefaultUserName } from "@/lib/utils";
import type { PageParams } from "@/types/next";
import { Pen } from "lucide-react";
import Image from "next/image";

export default async function RoutePage(props: PageParams<{}>) {
  const profileData = await getMyProfile();
  if (!profileData?.data) {
    throw new Error("Profile data not found");
  }

  const profile = profileData.data;

  const badges = [
    {
      id: 1,
      name: "Rejoint depuis mars 2024",
      image: "/images/modo.svg",
    },
    {
      id: 2,
      name: "Rédacteur",
      image: "/images/writer.svg",
    },
    {
      id: 3,
      name: "Python",
      image: "/images/python.svg",
    },
    {
      id: 4,
      name: "Admin",
      image: "/images/admin.svg",
    },
    {
      id: 5,
      name: "Développeur web",
      image: "/images/web.svg",
    },
    {
      id: 6,
      name: "Docker",
      image: "/images/docker.svg",
    },
    {
      id: 7,
      name: "Rust",
      image: "/images/rs.svg",
    },
  ];

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
        <div className="flex w-full justify-end mb-7 px-4">
          <Button size="sm">
            <Pen className="mr-2" size={16} />
            Modifier
          </Button>
        </div>

        {/* More informations */}
        <div className="mx-5 flex justify-between">
          {/* Names */}
          <div>
            <div className="flex justify-center items-center space-x-3">
              <Typography variant="h2" className="mb-0">
                {profile.name}
              </Typography>
              {/* Badges */}
              <div className="flex space-x-1 my-3 justify-center items-center">
                {badges.map((badge) => (
                  <TooltipProvider key={badge.id} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            suscipit, sapien nec tincidunt aliquet, purus felis scelerisque
            sapien, nec accumsan tortor est ac lectus. Nullam vel nisi nec nisl
            ultricies volutpat. Sed nec odio auctor, ultricies elit eget,
            ultrices nunc. Sed nec odio auctor, ultricies elit eget, ultrices
            nunc.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-5">
        <div
          className="grid grid-cols-1
        md:grid-cols-5 gap-3"
        >
          <StreakCalendar className="md:col-span-3 col-span-1" />
          <StatsChart className="md:col-span-2 col-span-1" />
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-5">
        <Typography variant="h2">Activité récente</Typography>
        <div>
          <MajorEvent
            image={profile.image}
            name={profile.name}
            userName={getDefaultUserName(profile.name || "")}
          />
          {/* relier les deux case avec un ebarre verticale */}
          <Connector />
          <MinorEvent
            image={profile.image}
            name={profile.name}
            userName={getDefaultUserName(profile.name || "")}
          />
          <Connector />
          <MajorEvent
            image={profile.image}
            name={profile.name}
            userName={getDefaultUserName(profile.name || "")}
          />
        </div>
      </div>
    </PageLayout>
  );
}
