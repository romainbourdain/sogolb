import { Navbar } from "@/features/layout/navbar";
import { ComputerSidebar } from "@/features/layout/sidebar/computer-sidebar";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout({ children }: LayoutParams<{}>) {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[20%_1fr] xl:grid-cols-[15%_1fr]">
      <Navbar showUserButton showSidebarButton />
      <ComputerSidebar />
      <main>{children}</main>
    </div>
  );
}
