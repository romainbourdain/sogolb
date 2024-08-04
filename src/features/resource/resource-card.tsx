import { Typography } from "@/components/ui/typography";
import type { LucideIcon } from "lucide-react";
import { BookOpen, GraduationCap, Newspaper } from "lucide-react";
import Image from "next/image";

export type ResourceCardProps = {
  title: string;
  variant: "article" | "lesson" | "formation";
};

const variants: {
  [key: string]: { color: string; icon: LucideIcon };
} = {
  article: { color: "pink", icon: Newspaper },
  formation: { color: "purple", icon: GraduationCap },
  lesson: { color: "orange", icon: BookOpen },
};

export const ResourceCard = ({ title, variant }: ResourceCardProps) => {
  const Icon: LucideIcon = variants[variant].icon;
  return (
    <div
      className="relative flex aspect-square size-36
       flex-col justify-between overflow-hidden rounded-xl
       border-4 border-secondary p-3 md:size-52"
    >
      {/* Background fallback */}
      <Image
        src={`/images/${variants[variant].color}-cover.svg`}
        alt="cover"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />

      {/* Top right icon */}
      <div className="flex w-full items-center justify-end">
        <Icon className="text-white" />
      </div>

      {/* Title */}
      <Typography variant="h2" className="text-md font-semibold text-white">
        {title}
      </Typography>
    </div>
  );
};
