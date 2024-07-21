import { PageLayout } from "@/components/tailwind/page-layout";
import { auth } from "@/lib/auth";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  return (
    <PageLayout className="h-full">
      {/* Landing page */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-7xl font-bold">KIWI</h1>
        <p className="text-3xl mt-3">
          Soit le meilleur des nazes que tu puisses être, t'sais
        </p>
      </div>
    </PageLayout>
  );
}
