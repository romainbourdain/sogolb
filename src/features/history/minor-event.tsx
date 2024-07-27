import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Newspaper } from "lucide-react";
import { FaComment } from "react-icons/fa";

const MinorEvent = ({
  image,
  name,
  userName,
}: {
  image: string | null;
  name: string | null;
  userName: string | null;
}) => {
  const fake_data = {
    action: "a commenté",
    content: "Il n'y a pas d'événement mineur pour le moment.",
    date: "Il y a 3 jours",
    type: "Article",
  };
  return (
    <div className="relative flex flex-row justify-center items-center h-10">
      {/* Icon */}
      <div
        className="absolute top-1/2 left-10 transform -translate-y-1/2 translate-x-[-50%]
      h-full aspect-square bg-primary/10 rounded-full
      flex justify-center items-center"
      >
        <FaComment size={20} />
      </div>

      {/* Event */}
      <div className="pl-[4.5rem] flex flex-row justify-between items-center w-full">
        {/* Title */}
        <div className="flex flex-row justify-center items-center gap-2">
          {/* Avatar */}
          <Avatar className="size-10 border-2 border-background rounded-full overflow-hidden hidden md:block">
            {image ? (
              <AvatarImage src={image} alt="Profile Image" />
            ) : (
              <AvatarFallback className="text-md">
                {getInitials(name || "")}
              </AvatarFallback>
            )}
          </Avatar>
          {/* Action */}
          <p className="text-muted-foreground flex gap-1">
            <span className="text-foreground hidden md:block">@{userName}</span>
            {" " + fake_data.action + " " + fake_data.date}
          </p>
        </div>

        {/* Badge */}
        <Badge variant="default" className="text-xs font-medium">
          <Newspaper className="mr-1" size={13} />
          {fake_data.type}
        </Badge>
      </div>
    </div>
  );
};

export default MinorEvent;
