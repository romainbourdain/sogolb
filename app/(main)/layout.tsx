import { ProtectedRoute } from "@/auth/protected-route";
import { Sidebar } from "@/components/layout/sidebar";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout({ children }: LayoutParams<{}>) {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-1 overflow-y-hidden max-md:grid-cols-1">
      <Sidebar />
      <main className="size-full overflow-y-scroll p-4">
        <ProtectedRoute>{children}</ProtectedRoute>
      </main>
    </div>
  );
}
