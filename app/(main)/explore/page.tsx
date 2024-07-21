// "use client";
import { PageLayout } from "@/components/tailwind/page-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { articles, formations, lessons } from "@/data/resources";
import { ResourceCard } from "@/features/resource/resource-card";
import type { PageParams } from "@/types/next";
import { Search } from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="h-full px-5 md:px-10">
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
        <div className="select-none">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <ResourceCard resource={article} variant="article" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Lessons */}
      <div className="mt-10">
        <Typography variant="h2" className="mb-5 ml-3">
          Leçons
        </Typography>
        <div className="select-none">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent>
              {lessons.map((lesson, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <ResourceCard resource={lesson} variant="lesson" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Formations */}
      <div className="mt-10">
        <Typography variant="h2" className="mb-5 ml-3">
          Formations
        </Typography>
        <div className="select-none">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent>
              {formations.map((formation, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <ResourceCard resource={formation} variant="formation" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </PageLayout>
  );
}
