import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

export type SidebarLinkProps = ComponentPropsWithoutRef<"a"> & {
  icon: LucideIcon;
};

export const SidebarLink = ({
  href,
  className,
  icon: Icon,
  children,
  ...props
}: SidebarLinkProps) => {
  const [segment] = useSelectedLayoutSegments();
  const isActive = href === `/${segment}`;

  return (
    <Link
      href={href!}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "flex justify-start text-muted-foreground",
        isActive && "bg-secondary font-bold text-secondary-foreground",
        className
      )}
      {...props}
    >
      <Icon size={20} className="mr-2" />
      {children}
    </Link>
  );
};
