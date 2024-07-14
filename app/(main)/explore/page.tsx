import { PageLayout } from "@/components/tailwind/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PageParams } from "@/types/next";
import { Search } from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="h-full">
      {/* Search bar */}
      <div className="flex justify-center items-center gap-2 bg-yellow-600">
        <Input
          className="bg-warning-foreground"
          type="search"
          placeholder="Rechercher un article, une formation, un parcours..."
        />
        <Button size="sm" className="mt-2 bg-slate-400">
          <Search size={16} />
        </Button>
      </div>
      {/* Articles */}
      {/* Formations */}
      {/* Curriculum */}
    </PageLayout>
  );
}
