import { Button } from "@/components/ui/button";
import { twx } from "@/lib/twx";
import { Menu } from "lucide-react";
import type { PropsWithChildren } from "react";
import { SearchBar } from "./searchbar";
import { Tools } from "./tools";

export const PageContainer = twx.div`mx-auto grid h-full max-w-screen-xl grid-cols-[auto_300px] gap-4 max-xl:grid-cols-1`;

export const PageAside = ({ children }: PropsWithChildren) => {
  return (
    <aside className="h-full space-y-6 rounded-xl bg-card p-4 max-xl:hidden">
      <Tools />
      {children}
    </aside>
  );
};

export const PageContent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant="card" className="md:hidden">
          <Menu size={24} />
        </Button>
        <SearchBar />
        <div className="xl:hidden">
          <Tools />
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};
