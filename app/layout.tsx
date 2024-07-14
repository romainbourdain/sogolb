import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default async function RootLayout({ children }: LayoutParams<{}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" {...config} />
      </head>
      <body className={cn("min-h-screen h-full", inter.className)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
