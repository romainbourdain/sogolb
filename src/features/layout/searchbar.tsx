"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  // TODO : Add search functionality
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="size-5 text-muted-foreground" />
      </div>
      <Input
        type="search"
        placeholder="Rechercher un article, une leçon, une formation ..."
        className="border-none bg-card pl-10"
      />
    </div>
  );
};
