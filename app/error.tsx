"use client";

import { PageLayout } from "@/components/tailwind/page-layout";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { ErrorParams } from "@/types/next";
import Link from "next/link";

export default function RouteError({ error, reset }: ErrorParams) {
  return (
    <PageLayout className="flex h-screen max-w-md flex-col items-start justify-center gap-3">
      <Typography variant="code">400</Typography>
      <Typography variant="h1">Oh No! Unexpected Error.</Typography>
      <Typography variant="base">
        It seems we're experiencing some technical difficulties. Not to worry,
        our team is working on it. In the meantime, try refreshing the page or
        visiting us a bit later.
      </Typography>
      <Link href="/" className={cn(buttonVariants(), "mt-5")}>
        Go back home
      </Link>
    </PageLayout>
  );
}
