import { cn } from "@/lib/utils";

interface TopNavDescriptionProps {
  description: string;
  className?: string;
}

export function TopNavDescription({ description, className }: TopNavDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-10 max-w-2xl text-lg text-gray-400 md:text-xl",
        className
      )}
    >
      {description}
    </p>
  );
}
