import { PageLayout } from "@/components/tailwind/page-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { fake_profile } from "@/data/profile";
import { getInitials } from "@/lib/utils";
import type { PageParams } from "@/types/next";
import { Pen } from "lucide-react";
import Image from "next/image";

export default async function RoutePage(props: PageParams<{}>) {
  const profile = fake_profile;
  return (
    <PageLayout className="h-full">
      {/* Headers */}
      <div className="relative mb-5">
        {/* Banner */}
        <Image
          src={profile.banner}
          alt="Profile Banner"
          width={1920}
          height={1080}
          className="h-64 w-full object-cover"
        />
        {/* Picture */}
        <div className="absolute bottom-0 left-[2%] transform translate-y-1/2">
          <Avatar className="size-36 border-4 border-black shadow-md">
            <AvatarImage src={profile.image} alt="Profile Image" />
            <AvatarFallback className="text-4xl">
              {getInitials(profile.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Edit button */}
      <div className="w-full flex justify-end p-3">
        <Button size="sm">
          <Pen className="mr-2" size={16} />
          Modifier
        </Button>
      </div>

      {/* Names */}
      <div className="mx-5">
        <h1 className="text-2xl font-semibold">{profile.name}</h1>
        <h2 className="text-lg font-light text-muted-foreground">
          @{profile.userName}
        </h2>
      </div>

      {/* Separator */}
      <div className="border-b border-muted-foreground my-6" />

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
