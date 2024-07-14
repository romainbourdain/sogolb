import { Navbar } from "@/features/layout/navbar";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout({ children }: LayoutParams<{}>) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-hidden">
      <Navbar />
      <main className="flex items-center px-4">{children}</main>
    </div>
  );
}
