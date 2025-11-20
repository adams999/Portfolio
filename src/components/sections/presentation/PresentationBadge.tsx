import { cn } from "@/lib/utils";
import type { TopNavBadge as PresentationBadgeType } from "@/types/topnav";

interface PresentationBadgeProps {
  badge: PresentationBadgeType;
  className?: string;
}

const statusColors = {
  available: "bg-green-500",
  busy: "bg-yellow-500",
  unavailable: "bg-red-500",
};

const statusAnimationColors = {
  available: "bg-green-400",
  busy: "bg-yellow-400",
  unavailable: "bg-red-400",
};

export function PresentationBadge({ badge, className }: PresentationBadgeProps) {
  return (
    <div
      className={cn(
        "mb-8 inline-flex items-center rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 px-3 py-1 text-sm text-gray-700 dark:text-gray-300 backdrop-blur-sm",
        className
      )}
    >
      <span className="mr-2 flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75",
            statusAnimationColors[badge.status]
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            statusColors[badge.status]
          )}
        />
      </span>
      {badge.text}
    </div>
  );
}
