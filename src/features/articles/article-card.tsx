import { Typography } from "@/components/ui/typography";
import { Newspaper } from "lucide-react";
import { FaKiwiBird } from "react-icons/fa";

export const ArticleCard = ({
  article,
}: {
  article: { title: string; content: string };
}) => {
  return (
    <div className="rounded-xl border-secondary border-4 relative size-52 aspect-square">
      {/* Background fallback */}
      <FaKiwiBird
        size={150}
        className="text-primary opacity-10 absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2"
      />

      {/* Top right icon */}
      <Newspaper className="text-primary absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2" />

      {/* Title */}
      <Typography
        variant="h3"
        className="text-lg font-semibold absolute bottom-0 left-0 p-5"
      >
        {article.title}
      </Typography>
    </div>
  );
};
