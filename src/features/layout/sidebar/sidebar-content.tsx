import {
  Book,
  BookOpen,
  Bookmark,
  Code,
  Compass,
  GraduationCap,
  Home,
  Newspaper,
} from "lucide-react";
import { SidebarLink } from "./sidebar-link";

export const SidebarContent = () => (
  <div className="space-y-6">
    <div className="space-y-2">
      <SidebarLink icon={Home} href="/home">
        Accueil
      </SidebarLink>
      <SidebarLink icon={Compass} href="/explore">
        Explorer
      </SidebarLink>
      <SidebarLink icon={Bookmark} href="/saved">
        Enregistrés
      </SidebarLink>
    </div>
    <div className="space-y-2">
      <SidebarLink icon={GraduationCap} href="/formations">
        Formations
      </SidebarLink>
      <SidebarLink icon={BookOpen} href="/lessons">
        Leçons
      </SidebarLink>
      <SidebarLink icon={Code} href="/projects">
        Projets
      </SidebarLink>
    </div>
    <div className="space-y-2">
      <SidebarLink icon={Newspaper} href="/articles">
        Articles
      </SidebarLink>
      <SidebarLink icon={Book} href="/kiwipedia">
        Kiwipedia
      </SidebarLink>
    </div>
  </div>
);
