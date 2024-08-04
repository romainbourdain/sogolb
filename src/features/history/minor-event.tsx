import { Badge } from "@/components/ui/badge";
import { getDefaultUserName, getEventTypeCreds, getTimeInterval } from "@/lib/utils";
import type { Event, User } from "@prisma/client";
import { Newspaper } from "lucide-react";

export type EventsProps = {
  event: Event;
  profilePicture: User["image"];
  profileName: User["name"];
};

const MinorEvent = ({ event, profilePicture, profileName }: EventsProps) => {
  const userName = getDefaultUserName(profileName || "");
  const { type, createdAt } = event;
  const { action, Icon, color } = getEventTypeCreds(type);

  return (
    <div className="relative flex h-10 flex-row items-center justify-center">
      {/* Icon */}
      <div
        className="absolute left-10 top-1/2 flex aspect-square h-full -translate-y-1/2 translate-x-[-50%] items-center justify-center rounded-full bg-accent"
      >
        <Icon size={20} />
      </div>

      {/* Event */}
      <div className="flex w-full flex-row items-center justify-between pl-[4.5rem]">
        {/* Title */}
        <div className="flex flex-row items-center justify-center gap-2">
          {/* Avatar */}
          {/* <Link href={`/profile/${userName}`}>
            <Avatar className="hidden size-10 overflow-hidden rounded-full border-2 border-background md:block">
              <AvatarImage src={profilePicture || ""} alt="Profile Image" />
              <AvatarFallback className="text-md flex items-center justify-center text-center">
                {getInitials(profileName || "")}
              </AvatarFallback>

            </Avatar>
          </Link> */}
          {/* Action */}
          <p className="flex gap-1 text-muted-foreground">
            {` ${action} ${getTimeInterval(createdAt)}`}
          </p>
        </div>

        {/* Badge */}
        <Badge variant="default" className="flex items-center justify-center text-xs font-medium" style={{
          backgroundColor: color,
          color: "white",
        }}>
          <Newspaper className="mr-1" size={13} />
          {type}
        </Badge>
      </div>
    </div>
  );
};

export default MinorEvent;
