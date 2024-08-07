import { clsx, type ClassValue } from "clsx";
import { isSunday, nextSunday, startOfMonth } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const [first, last] = name.split(" ");
  return `${first.charAt(0)}${last ? last.charAt(0) : ""}`;
}

export function getDefaultUserName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
}

// Find next monday of the month (return first day if first day is monday)
export const getFirstSunday = (date: Date) => {
  const start = startOfMonth(date);
  if (isSunday(start)) return start;
  return nextSunday(start);
};

export const getActivityColor = (count: number) => {
  if (count === 0) return "bg-muted";
  if (count <= 3) return "bg-primary opacity-30";
  if (count <= 6) return "bg-primary opacity-70";
  return "bg-primary opacity-100";
};
