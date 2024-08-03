import Link from "next/link";
import { FaKiwiBird } from "react-icons/fa";
import { Typography } from "../ui/typography";

export type LogoProps = {
  href: string;
};

export const Logo = ({ href }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-4">
      <FaKiwiBird size={30} className="text-primary" />
      <Typography variant="h2">Kiwi</Typography>
    </Link>
  );
};
