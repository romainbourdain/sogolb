import { Logo } from "@/components/layout/logo";
import { UserButton } from "@/features/auth/user-button";
import { ThemeToggle } from "@/features/theme/theme-toggle";

export const Navbar = () => {
  return (
    <nav className="col-span-2 flex w-full items-center justify-between gap-2 border-b px-5 py-3">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
};
