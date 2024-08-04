import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getDefaultUserName, getInitials, getTimeInterval } from "@/lib/utils";
import { Event, User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AiFillThunderbolt } from "react-icons/ai";

export type EventsProps = {
  event: Event;
  image: User["image"];
  name: User["name"];
}

const MajorEvent = (
  { event, image, name }: EventsProps
) => {
  const userName = getDefaultUserName(name || "");
  return (
    <Card className="overflow-hidden border-none">
      <div className="flex flex-row items-center justify-between bg-muted px-4 py-3">
        {/* Title */}
        <div className="flex flex-row items-center justify-center gap-2">
          {/* Avatar */}
          <Avatar className="aspect-square size-10 overflow-hidden rounded-full border-2 border-background">
            {image ? (
              <AvatarImage src={image} alt="Profile Image" />
            ) : (
              <AvatarFallback className="text-xl">
                {getInitials(name || "")}
              </AvatarFallback>
            )}
          </Avatar>
          <p className="text-muted-foreground">
            <span className="text-foreground">@{userName}</span>
            {` ${event.action}`}
          </p>
        </div>

        {/* Icon */}
        <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-primary/20">
          <AiFillThunderbolt className="text-primary" size={25} />
        </div>
      </div>
      <CardContent className="flex items-center justify-start p-5">
        <p>{event.description}</p>
      </CardContent>
      <CardFooter className="px-5 py-3">
        {getTimeInterval(event.createdAt)}
      </CardFooter>
    </Card>
  );
};

export default MajorEvent;
