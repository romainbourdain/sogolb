import { getMyProfile } from "@/actions/profile.action";
import { PageLayout } from "@/components/tailwind/page-layout";
import { Button } from "@/components/ui/button";
import { defaultBanner } from "@/constants";
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
    <PageLayout className="h-full">
      {/* Headers */}
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
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <h2 className="text-lg font-light text-muted-foreground">
            @{getDefaultUserName(profile.name || "")}
          </h2>
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

      {/* Separator */}
      <div className="my-6 border-b border-muted-foreground" />

      {/* Contents */}
      <div className="mx-5">
        <h3 className="text-lg font-semibold">About</h3>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          suscipit, sapien nec tincidunt aliquet, purus felis scelerisque
          sapien, nec accumsan tortor est ac lectus. Nullam vel nisi nec nisl
          ultricies volutpat. Sed nec odio auctor, ultricies elit eget, ultrices
          nunc. Sed nec odio auctor, ultricies elit eget, ultrices nunc.
        </p>
      </div>
    </PageLayout>
  );
}
