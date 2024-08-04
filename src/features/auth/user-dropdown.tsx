"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";

export type UserDropdownProps = PropsWithChildren<{}>;

export const UserDropdown = ({ children }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/home">
          <DropdownMenuItem>
            <LayoutDashboard size={16} className="mr-2" />
            Tableau de bord
          </DropdownMenuItem>
        </Link>
        <Link href="/profile">
          <DropdownMenuItem>
            <User size={16} className="mr-2" />
            Profil
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={() => signOutAction()}>
          <LogOut size={16} className="mr-2" />
          Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
