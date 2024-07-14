import { PageLayout } from "@/components/tailwind/page-layout";
import { Input } from "@/components/ui/input";
import type { PageParams } from "@/types/next";
import { Search } from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="h-full">
      {/* Search bar */}
      <div className="flex justify-center items-center py-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder="Rechercher un article, une formation, un parcours..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Articles */}
      {/* Formations */}
      {/* Curriculum */}
    </PageLayout>
  );
}
