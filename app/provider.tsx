"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export type ProviderProps = PropsWithChildren<{}>;

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      {children}
    </ThemeProvider>
  );
};
