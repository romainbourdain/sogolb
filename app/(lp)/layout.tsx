import { Navbar } from "@/features/layout/navbar";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout({ children }: LayoutParams<{}>) {
  return (
    <div className="grid size-full grid-cols-1 grid-rows-[auto_1fr] overflow-y-hidden">
      <Navbar />
      <main className="size-full overflow-y-scroll">{children}</main>
    </div>
  );
}
