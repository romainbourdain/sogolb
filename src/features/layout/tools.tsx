import { UserButton } from "@/features/auth/user-button";
import { ThemeToggle } from "@/features/theme/theme-toggle";

export const Tools = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <ThemeToggle />
      <UserButton />
    </div>
  );
};
