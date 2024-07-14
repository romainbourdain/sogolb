import { UserButton } from "../auth/user-button";
import { ThemeToggle } from "../theme/theme-toggle";
import { Logo } from "./logo";
import { MobileSidebar } from "./sidebar/mobile-sidebar";

export type NavbarProps = {
  showUserButton?: boolean;
  showSidebarButton?: boolean;
};

export const Navbar = ({ showUserButton, showSidebarButton }: NavbarProps) => {
  return (
    <nav className="col-span-2 flex w-full items-center justify-between gap-2 border-b px-5 py-3">
      <div className="flex items-center gap-2">
        {showSidebarButton && <MobileSidebar />}
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {showUserButton && <UserButton />}
      </div>
    </nav>
  );
};
