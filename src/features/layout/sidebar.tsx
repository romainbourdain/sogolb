"use client";

import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  Book,
  Bookmark,
  Code2,
  Compass,
  GraduationCap,
  Home,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const sidebarLinks = [
  {
    title: "Librairie",
    links: [
      { label: "Accueil", href: "/home", icon: Home },
      { label: "Explorer", href: "/explore", icon: Compass },
      { label: "Enregistré", href: "/saved", icon: Bookmark },
    ],
  },
  {
    title: "Apprendre",
    links: [
      { label: "Formations", href: "/formations", icon: GraduationCap },
      { label: "Leçons", href: "/lesson", icon: Book },
      { label: "Projets", href: "/projects", icon: Code2 },
    ],
  },
  {
    title: "Approfondir",
    links: [
      { label: "Articles", href: "/articles", icon: Newspaper },
      { label: "Kiwipedia", href: "/kiwipedia", icon: Book },
    ],
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="h-full w-56 bg-card max-md:hidden">
      <ScrollArea className="h-full">
        <div className="space-y-6 px-3 py-4">
          <div className="px-2">
            <Logo href="/home" />
          </div>
          {sidebarLinks.map((section) => (
            <div key={section.title} className="space-y-2">
              <Typography variant="h3">{section.title}</Typography>
              {section.links.map(({ label, icon: Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "flex gap-3 justify-start items-center",
                    pathname === href && "font-bold bg-muted"
                  )}
                >
                  <Icon size={24} />
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
