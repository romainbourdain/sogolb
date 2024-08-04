import { UnauthorizedCard } from "@/errors/unauthorized";
import type { PropsWithChildren } from "react";
import { getUser } from "./auth.action";

export type ProtectedRouteProps = PropsWithChildren<{}>;

export const ProtectedRoute = async ({ children }: ProtectedRouteProps) => {
  const user = await getUser();
  if (!user) return <UnauthorizedCard />;
  return <>{children}</>;
};
