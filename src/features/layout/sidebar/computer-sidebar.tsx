"use client";

import { buttonVariants } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { SidebarContent } from "./sidebar-content";

export const ComputerSidebar = () => {
  return (
    <aside className="overflow-y-scroll border-r max-md:hidden">
      <nav className="flex h-full flex-col justify-between p-2">
        <SidebarContent />
        <Link href="/publish" className={buttonVariants({ size: "sm" })}>
          <CirclePlus className="mr-2" size={20} />
          Publier
        </Link>
      </nav>
    </aside>
  );
};
