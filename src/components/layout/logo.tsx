import Link from "next/link";
import { FaKiwiBird } from "react-icons/fa";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <FaKiwiBird size={30} className="text-primary" />
      <span className="text-lg font-semibold">Kiwi</span>
    </Link>
  );
};
