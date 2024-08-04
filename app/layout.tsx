import { config } from "@/config";
import { NextTopLoader } from "@/features/layout/top-loader";
import { cn } from "@/lib/utils";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

const marsel = localFont({
  src: [
    {
      path: "../public/fonts/marsel/MarselTRIAL-Regular-BF6618a1b45dda4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/marsel/MarselTRIAL-Bold-BF6618a1b4158b8.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/marsel/MarselTRIAL-Thin-BF6618a1b472b09.otf",
      weight: "100",
      style: "normal",
    },
  ],
});

export default async function RootLayout({ children }: LayoutParams<{}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" {...config} />
      </head>
      <body className={cn("h-screen w-full", marsel.className)}>
        <Provider>
          <NextTopLoader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
