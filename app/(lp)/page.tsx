import { PageLayout } from "@/components/tailwind/page-layout";
import { auth } from "@/lib/auth";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  return (
    <PageLayout className="h-full">
      {/* Landing page */}
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">KIWI</h1>
        <p className="mt-3 text-3xl">
          Soit le meilleur des nazes que tu puisses être, t'sais
        </p>
      </div>
    </PageLayout>
  );
}
