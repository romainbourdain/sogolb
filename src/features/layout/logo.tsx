import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { FaKiwiBird } from "react-icons/fa";

export type LogoProps = {
  href: string;
};

export const Logo = ({ href }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-3">
      <FaKiwiBird size={30} className="text-primary" />
      <Typography variant="h2">Kiwi</Typography>
    </Link>
  );
};
