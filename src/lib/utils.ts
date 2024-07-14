import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const [first, last] = name.split(" ");
  return `${first.charAt(0)}${last ? last.charAt(0) : ""}`;
}
