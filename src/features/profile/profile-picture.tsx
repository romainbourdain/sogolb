"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

const ProfilePicture = ({
  image,
  name,
}: {
  image: string | null;
  name: string | null;
}) => {
  return (
    <Avatar className="size-36 border-4 border-black shadow-md">
      {image ? (
        <AvatarImage src={image} alt="Profile Image" />
      ) : (
        <AvatarFallback className="text-4xl">
          {getInitials(name || "")}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default ProfilePicture;
