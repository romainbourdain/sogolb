// components/ui/resource-card.tsx
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="relative rounded-xl border-secondary border-4 aspect-square overflow-hidden size-52">
      {/* Background fallback */}
      {/* <FaKiwiBird
        size={150}
        className="text-primary opacity-10 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2"
      /> */}
      <Image
        src={`/${variants[variant].color}-cover.svg`}
        alt="cover"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      {/* Top right icon */}
      <Icon className="absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2 text-white" />

      <CardContent>
        {/* Title */}
        <Typography
          variant="h2"
          className="font-semibold absolute bottom-0 left-0 p-5 text-white"
        >
          {resource.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
