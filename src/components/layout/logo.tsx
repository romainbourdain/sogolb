import Link from "next/link";
import { FaKiwiBird } from "react-icons/fa";
import { Typography } from "../ui/typography";

export const Logo = () => {
  return (
    <Link href="/home" className="flex items-center gap-4">
      <FaKiwiBird size={36} className="text-primary" />
      <Typography variant="h2">Kiwi</Typography>
    </Link>
  );
};
