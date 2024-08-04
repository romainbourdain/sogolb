import { Badge } from "@/components/ui/badge";
import { getDefaultUserName, getInitials, getTimeInterval } from "@/lib/utils";
import { Event, User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { FaComment } from "react-icons/fa";

export type EventsProps = {
  event: Event;
  image: User["image"];
  name: User["name"];
}

const MinorEvent = (
  { event, image, name }: EventsProps
) => {
  const userName = getDefaultUserName(name || "");
  return (
    <div className="relative flex h-10 flex-row items-center justify-center">
      {/* Icon */}
      <div
        className="absolute left-10 top-1/2 flex aspect-square h-full
      -translate-y-1/2 translate-x-[-50%] items-center justify-center
      rounded-full bg-primary/10"
      >
        <FaComment size={20} />
      </div>

      {/* Event */}
      <div className="flex w-full flex-row items-center justify-between pl-[4.5rem]">
        {/* Title */}
        <div className="flex flex-row items-center justify-center gap-2">
          {/* Avatar */}
          <Link href={`/profile/${userName}`}>
            <Avatar className="hidden size-10 overflow-hidden rounded-full border-2 border-background md:block">
              {image ? (
                <AvatarImage src={image} alt="Profile Image" />
              ) : (
                <AvatarFallback className="text-md">
                  {getInitials(name || "")}
                </AvatarFallback>
              )}
            </Avatar>
          </Link>
          {/* Action */}
          <p className="flex gap-1 text-muted-foreground">
            <span className="hidden text-foreground md:block">@{userName}</span>
            {` ${event.action} ${getTimeInterval(event.createdAt)}`}
          </p>
        </div>

        {/* Badge */}
        <Badge variant="default" className="text-xs font-medium">
          <Newspaper className="mr-1" size={13} />
          {event.type}
        </Badge>
      </div>
    </div>
  );
};

export default MinorEvent;
