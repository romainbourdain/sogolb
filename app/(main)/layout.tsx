import { ProtectedRoute } from "@/features/auth/protected-route";
import { Sidebar } from "@/features/layout/sidebar";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout({ children }: LayoutParams<{}>) {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-1 overflow-y-hidden max-md:grid-cols-1">
      <Sidebar />
      <main className="size-full overflow-y-scroll">
        <ProtectedRoute>{children}</ProtectedRoute>
      </main>
    </div>
  );
}
