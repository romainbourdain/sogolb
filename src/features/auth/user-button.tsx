import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import { SignInButton } from "./sign-in-button";
import { UserDropdown } from "./user-dropdown";

export const UserButton = async () => {
  const session = await auth();

  if (!session?.user) {
    return <SignInButton />;
  }

  return (
    <UserDropdown>
      <Avatar className="size-10 cursor-pointer">
        <AvatarImage
          src={session.user.image || ""}
          alt={session.user.name || "user profile picture"}
        />
        <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
      </Avatar>
    </UserDropdown>
  );
};
