import { cn } from "@/lib/utils";

interface PresentationDescriptionProps {
  description: string;
  className?: string;
}

export function PresentationDescription({ description, className }: PresentationDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-10 max-w-2xl text-lg text-white md:text-xl",
        className
      )}
    >
      {description}
    </p>
  );
}
