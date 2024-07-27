import { getMyProfile } from "@/actions/profile.action";
import { PageLayout } from "@/components/tailwind/page-layout";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { defaultBanner } from "@/constants";
import { StatsChart } from "@/features/charts/stats-charts";
import StreakCalendar from "@/features/charts/streak-calendar";
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

  return (
    <PageLayout className="h-full space-y-10">
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
        <div className="flex w-full justify-end p-3">
          <Button size="sm">
            <Pen className="mr-2" size={16} />
            Modifier
          </Button>
        </div>

        {/* More informations */}
        <div className="mx-5 flex justify-between">
          {/* Names */}
          <div>
            <Typography variant="h2" className="mb-0">
              {profile.name}
            </Typography>
            <Typography
              variant="h3"
              className="font-light text-muted-foreground"
            >
              @{getDefaultUserName(profile.name || "")}
            </Typography>
          </div>

          {/* Badges */}
          <div className="flex space-x-2 my-3">
            {profile.badges.map((badge) => (
              <div key={badge.id}>
                <Image
                  src={badge.image}
                  alt={badge.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            ))}
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
        <div className="grid grid-cols-5 gap-3">
          <StreakCalendar className="col-span-3" />
          <StatsChart className="col-span-2" />
        </div>
      </div>

      {/* Separator */}
      {/* <Separator className="my-6" /> */}

      {/* Timeline */}
      <div className="mx-5">
        <Typography variant="h2">Activité récente</Typography>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          suscipit, sapien nec tincidunt aliquet, purus felis scelerisque
          sapien, nec accumsan tortor est ac lectus. Nullam vel nisi nec nisl
          ultricies volutpat. Sed nec odio auctor, ultricies elit eget, ultrices
          nunc. Sed nec odio auctor, ultricies elit eget, ultrices nunc.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit,
          sapien nec tincidunt aliquet, purus felis scelerisque sapien, nec
          accumsan tortor est ac lectus. Nullam vel nisi nec nisl ultricies
          volutpat. Sed nec odio auctor, ultricies elit eget, ultrices nunc. Sed
          nec odio auctor, ultricies elit eget, ultrices nunc.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aliquam suscipit, sapien nec
          tincidunt aliquet, purus felis scelerisque sapien, nec accumsan tortor
          est ac lectus. Nullam vel nisi nec nisl ultricies volutpat. Sed nec
          odio auctor, ultricies elit eget, ultrices nunc. Sed nec odio auctor,
          ultricies elit eget, ultrices nunc.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam suscipit, sapien nec tincidunt
          aliquet, purus felis scelerisque sapien, nec accumsan tortor est ac
          lectus. Nullam vel nisi nec nisl ultricies volutpat. Sed nec odio
          auctor, ultricies elit eget, ultrices nunc. Sed nec odio auctor,
          ultricies elit eget, ultrices nunc.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam suscipit, sapien nec tincidunt
          aliquet, purus felis scelerisque sapien, nec accumsan tortor est ac
          lectus. Nullam vel nisi nec nisl ultricies volutpat. Sed nec odio
          auctor, ultricies elit eget, ultrices nunc. Sed nec odio auctor,
          ultricies elit eget, ultrices nunc.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam suscipit, sapien nec tincidunt
          aliquet, purus felis scelerisque sapien, nec accumsan tortor est ac
          lectus. Nullam vel nisi nec nisl ultricies volutpat. Sed nec odio
          auctor, ultricies elit eget, ultrices nunc. Sed nec odio auctor,
          ultricies elit eget, ultrices nunc.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam suscipit, sapien nec tincidunt
          aliquet, purus felis scelerisque sapien, nec accumsan tortor est ac
          lectus. Nullam vel nisi nec nisl ultricies volutpat. Sed nec odio
          auctor, ultricies elit eget, ultrices nunc. Sed nec odio auctor,
          ultricies elit eget, ultrices nunc.
        </p>
      </div>
    </PageLayout>
  );
}
