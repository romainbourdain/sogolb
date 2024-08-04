import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export type LoaderProps = {
  variant?: "default" | "kiwi";
  size?: number;
  className?: string;
};

export const Loader = ({
  variant = "default",
  className,
  size = 24,
}: LoaderProps) => {
  switch (variant) {
    case "default":
      return <Loader2 className={cn("animate-spin", className)} size={size} />;
    case "kiwi":
      return (
        <Image
          src="/images/kiwi.svg"
          alt="Loader"
          width={64}
          height={64}
          className={cn("animate-spin", className)}
          style={{ height: size, width: size }}
        />
      );
  }
};
