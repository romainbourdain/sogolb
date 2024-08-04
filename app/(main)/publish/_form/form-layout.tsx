import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

export type FormLayoutProps = PropsWithChildren<{
  title: string;
}>;

export const FormLayout = ({ children, title }: FormLayoutProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
