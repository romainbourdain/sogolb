import { config } from "@/config";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./provider";

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
      <body className={"h-screen font-poppins"}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
