import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Social } from "./social";

export type CardWrapperProps = PropsWithChildren<{
  showSocial?: boolean;
  title: string;
  description?: string;
  backButtonLabel: string;
  backButtonHref: string;
}>;

export const CardWrapper = ({
  children,
  showSocial,
  title,
  description,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="mx-auto w-full max-w-screen-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{showSocial && <Social />}</CardFooter>
      <div className="flex w-full justify-center pb-3">
        <Link
          href={backButtonHref}
          className={cn(buttonVariants({ variant: "link" }))}
        >
          {backButtonLabel}
        </Link>
      </div>
    </Card>
  );
};
