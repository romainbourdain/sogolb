// "use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { articles, formations, lessons } from "@/data/resources";
import {
  PageAside,
  PageContainer,
  PageContent,
} from "@/features/layout/page-layout";
import type { PageParams } from "@/types/next";
import { Groupe } from "./groupe";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageContainer>
      <PageContent className="space-y-8">
        <Groupe
          data={articles}
          title="Articles"
          href="/articles"
          variant="article"
        />
        <Groupe
          data={lessons}
          title="Leçons"
          href="/lessons"
          variant="lesson"
        />
        <Groupe
          data={formations}
          title="Formations"
          href="/formations"
          variant="formation"
        />
      </PageContent>
      <PageAside>
        <Typography variant="h2">Type</Typography>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            articles
          </Button>
          <Button variant="outline" size="sm">
            leçons
          </Button>
          <Button variant="outline" size="sm">
            formations
          </Button>
        </div>
        <Typography variant="h2">Tags</Typography>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            web
          </Button>
          <Button variant="outline" size="sm">
            cybersecurite
          </Button>
          <Button variant="outline" size="sm">
            next.js
          </Button>
          <Button variant="outline" size="sm">
            ui-ux
          </Button>
          <Button variant="outline" size="sm">
            javascript
          </Button>
        </div>
        <Typography variant="h2">Auteur</Typography>
      </PageAside>
    </PageContainer>
  );
}
