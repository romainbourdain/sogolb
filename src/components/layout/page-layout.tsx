import { twx } from "@/lib/twx";
import { Menu } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { Search } from "./searchbar";
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

export const PageHeader = () => {
  return (
    <div className="flex gap-2">
      <Button variant="card" className="md:hidden">
        <Menu size={24} />
      </Button>
      <Search />
      <div className="xl:hidden">
        <Tools />
      </div>
    </div>
  );
};
