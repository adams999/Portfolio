import { cn } from "@/lib/utils";
import type { TopNavTitle as TopNavTitleType } from "@/types/topnav";

interface TopNavTitleProps {
  title: TopNavTitleType;
  className?: string;
}

export function TopNavTitle({ title, className }: TopNavTitleProps) {
  return (
    <h1
      className={cn(
        "mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl",
        className
      )}
    >
      {title.name} <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        {title.role}
      </span>
    </h1>
  );
}
