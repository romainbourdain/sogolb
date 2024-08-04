import { EventType } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { isSunday, nextSunday, startOfMonth } from "date-fns";
import { AiOutlineAlert } from "react-icons/ai";
import {
  BiSolidComment,
  BiSolidGraduation,
  BiSolidHeart,
  BiSolidPen,
} from "react-icons/bi";
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

export const getTimeInterval = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44); // Approximation
  const years = Math.floor(days / 365.25); // Approximation

  if (minutes < 1) {
    return "il y a quelques secondes";
  } else if (minutes < 60) {
    return `il y a ${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else if (hours < 24) {
    return `il y a ${hours} heure${hours > 1 ? "s" : ""}`;
  } else if (days < 7) {
    return `il y a ${days} jour${days > 1 ? "s" : ""}`;
  } else if (weeks < 5) {
    return `il y a ${weeks} semaine${weeks > 1 ? "s" : ""}`;
  } else if (months < 12) {
    return `il y a ${months} mois`;
  } else {
    return `il y a ${years} an${years > 1 ? "s" : ""}`;
  }
};

export const getEventTypeCreds = (eventType: EventType) => {
  switch (eventType) {
    case EventType.ARTICLE_WRITTEN:
      return {
        action: "a écrit un article",
        Icon: BiSolidPen,
        color: "#f0a500",
        isMajor: true,
      };
    case EventType.COMMENTED:
      return {
        action: "a commenté",
        Icon: BiSolidComment,
        color: "#007bff",
        isMajor: false,
      };
    case EventType.LESSON_COMPLETED:
      return {
        action: "a fini une leçon",
        Icon: BiSolidGraduation,
        color: "#28a745",
        isMajor: true,
      };
    case EventType.LIKED_ARTICLE:
      return {
        action: "a aimé un article",
        Icon: BiSolidHeart,
        color: "#dc3545",
        isMajor: false,
      };
    default:
      return {
        action: "a effectué une action",
        Icon: AiOutlineAlert,
        color: "#6c757d",
        isMajor: false,
      };
  }
};

export const isMajorEvent = (eventType: EventType) => {
  return getEventTypeCreds(eventType).isMajor;
};
