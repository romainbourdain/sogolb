import { Typography } from "@/components/ui/typography";
import { BookOpen, GraduationCap, LucideIcon, Newspaper } from "lucide-react";
import Image from "next/image";

interface ResourceCardProps {
  title: string;
  content: string;
}

const variants: {
  [key: string]: { color: string; icon: LucideIcon };
} = {
  article: { color: "pink", icon: Newspaper },
  formation: { color: "purple", icon: GraduationCap },
  lesson: { color: "orange", icon: BookOpen },
};

export const ResourceCard = ({
  resource,
  variant,
}: {
  resource: ResourceCardProps;
  variant: keyof typeof variants;
}) => {
  const Icon: LucideIcon = variants[variant].icon;
  return (
    <div
      className="relative flex flex-col justify-between
       border-secondary border-4 rounded-xl p-3
       aspect-square overflow-hidden size-36 md:size-52"
    >
      {/* Background fallback */}
      <Image
        src={`/${variants[variant].color}-cover.svg`}
        alt="cover"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />

      {/* Top right icon */}
      <div className="flex justify-end items-center w-full">
        <Icon className="text-white" />
      </div>

      {/* Title */}
      <Typography variant="h2" className="font-semibold text-white text-md">
        {resource.title}
      </Typography>
    </div>
  );
};
