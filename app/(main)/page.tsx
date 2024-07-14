import { PageLayout } from "@/components/tailwind/page-layout";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  return (
    <PageLayout className="h-full">
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button>Sign Out</Button>
        {JSON.stringify(session)}
      </form>
    </PageLayout>
  );
}
