import { UserButton } from "../auth/user-button";
import { ThemeToggle } from "../theme/theme-toggle";

export type NavbarProps = {
  showUserButton?: boolean;
};

export const Navbar = ({ showUserButton }: NavbarProps) => {
  return (
    <nav className="flex w-full items-center justify-end gap-2 border-b px-5 py-3">
      <ThemeToggle />
      {showUserButton && <UserButton />}
    </nav>
  );
};
