import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ResourceCard } from "@/features/resource/resource-card";
import type { Article, Formation, Lesson } from "@prisma/client";
import Link from "next/link";

export type GroupeProps = {
  data: Article[] | Lesson[] | Formation[];
  title: string;
  href: string;
  variant: "article" | "lesson" | "formation";
};

export const Groupe = ({ data, variant, title, href }: GroupeProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography variant="h2">{title}</Typography>
        <Link href={href} className={buttonVariants({ variant: "link" })}>
          Voir plus
        </Link>
      </div>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <ResourceCard
            key={index}
            title={item.title}
            variant={variant}
            content=""
          />
        ))}
      </div>
    </div>
  );
};
