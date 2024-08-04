// "use client";
import { Search } from "@/components/layout/searchbar";
import { PageLayout } from "@/components/tailwind/page-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { articles } from "@/data/resources";
import { ResourceCard } from "@/features/resource/resource-card";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <PageLayout className="h-full px-5 md:px-10">
      <Search />
      {/* Articles */}
      <div className="mt-10">
        <Typography variant="h2" className="mb-5 ml-3">
          Articles
        </Typography>
        <div className="select-none">
          <Carousel>
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/4">
                  <ResourceCard resource={article} variant="article" />
                </CarouselItem>
              ))}
            </CarouselContent>
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
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/4">
                  <ResourceCard resource={article} variant="lesson" />
                </CarouselItem>
              ))}
            </CarouselContent>
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
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/4">
                  <ResourceCard resource={article} variant="formation" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </PageLayout>
  );
}
