"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "../logo";
import { SidebarContent } from "./sidebar-content";

export const MobileSidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <Separator className="my-5" />
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </div>
  );
};
