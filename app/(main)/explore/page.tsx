import { PageLayout } from "@/components/tailwind/page-layout";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { articles } from "@/data/articles";
import { formations } from "@/data/formations";
import { lessons } from "@/data/lessons";
import { ArticleCard } from "@/features/articles/article-card";
import { FormationCard } from "@/features/formations/formation-card";
import { LessonCard } from "@/features/lessons/lesson-card";
import type { PageParams } from "@/types/next";
import { Search } from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="h-full">
      {/* Search bar */}
      <div className="flex justify-center items-center py-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder="Rechercher un article, une leçon, une formation ..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Articles */}
      <div className="mt-10">
        <Typography variant="h2" className="mb-5 ml-3">
          Articles
        </Typography>
        <div className="flex gap-4 overflow-hidden">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* Lessons */}
      <div className="mt-10 overflow-hidden">
        <Typography variant="h2" className="mb-5 ml-3">
          Leçons
        </Typography>
        <div className="flex gap-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>

      {/* Formations */}
      <div className="mt-10">
        <Typography variant="h2" className="mb-5 ml-3">
          Formations
        </Typography>
        <div className="flex gap-4 overflow-hidden">
          {formations.map((formation) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
