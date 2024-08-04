import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">KIWI</h1>
      <p className="mt-3 text-3xl">
        Soit le meilleur des nazes que tu puisses être, t'sais
      </p>
    </div>
  );
}
