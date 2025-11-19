import { cn } from "@/lib/utils";
import type { TopNavTitle as PresentationTitleType } from "@/types/topnav";

interface PresentationTitleProps {
  title: PresentationTitleType;
  className?: string;
}

export function PresentationTitle({ title, className }: PresentationTitleProps) {
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
