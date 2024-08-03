import { UserButton } from "@/features/auth/user-button";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { type PropsWithChildren } from "react";

export type IslandProps = PropsWithChildren<{}>;

export const Island = ({ children }: IslandProps) => {
  return (
    <div className="h-full space-y-6 rounded-xl bg-card p-4">
      <div className="flex w-full items-center justify-end gap-2 px-2">
        <ThemeToggle />
        <UserButton />
      </div>
      {children}
    </div>
  );
};
