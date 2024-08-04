import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AiFillThunderbolt } from "react-icons/ai";

const MajorEvent = ({
  image,
  name,
  userName,
}: {
  image: string | null;
  name: string | null;
  userName: string | null;
}) => {
  const fake_data = {
    action: "a mangé un kiwi",
    content: "Il n'y a pas d'événement majeur pour le moment.",
    date: "Il y a 2 jours",
  };
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
            {` ${fake_data.action}`}
          </p>
        </div>

        {/* Icon */}
        <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-primary/20">
          <AiFillThunderbolt className="text-primary" size={25} />
        </div>
      </div>
      <CardContent className="flex items-center justify-start p-5">
        <p>{fake_data.content}</p>
      </CardContent>
      <CardFooter className="px-5 py-3">
        <a href="/history" className="text-sm text-muted-foreground">
          {fake_data.date}
        </a>
      </CardFooter>
    </Card>
  );
};

export default MajorEvent;
