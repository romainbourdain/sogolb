import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getDefaultUserName, getEventTypeCreds, getInitials, getTimeInterval } from "@/lib/utils";
import type { Event, User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export type EventsProps = {
  event: Event;
  profilePicture: User["image"];
  profileName: User["name"];
};

const MajorEvent = ({ event, profilePicture, profileName }: EventsProps) => {
  const userName = getDefaultUserName(profileName || "");
  const { type, description, createdAt } = event;
  const { action, Icon, color } = getEventTypeCreds(type);

  return (
    <Card className="overflow-hidden border-none">
      <div className="flex flex-row items-center justify-between bg-accent px-4 py-3">
        <div className="flex flex-row items-center justify-center gap-2">
          <Avatar className="aspect-square size-10 overflow-hidden rounded-full border-2 border-muted">
            <AvatarImage src={profilePicture || ""} alt="Profile Image" />
            <AvatarFallback className="text-xl">
              {getInitials(profileName || "")}
            </AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground">
            <span className="text-foreground hover:underline">@{userName}</span>
            {` ${action}`}
          </p>
        </div>

        <div
          className="flex aspect-square size-8 items-center justify-center rounded-full border-2 border-white p-1"
          style={{ backgroundColor: color }}
        >
          <Icon size={25} />
        </div>
      </div>
      <CardContent className="flex items-center justify-start p-5">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="px-5 py-3">
        {getTimeInterval(createdAt)}
      </CardFooter>
    </Card>
  );
};

export default MajorEvent;
