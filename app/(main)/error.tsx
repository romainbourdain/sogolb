"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ErrorParams } from "@/types/next";

export default function RouteError({ error, reset }: ErrorParams) {
  console.error(error);
  return (
    <Card variant="destructive">
      <CardHeader>
        <CardTitle>
          Sorry, something went wrong. Please try again later.
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Button onClick={reset}>Try again</Button>
      </CardFooter>
    </Card>
  );
}
