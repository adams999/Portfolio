import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { TopNavButton } from "@/types/topnav";

interface PresentationCTAProps {
  buttons: TopNavButton[];
  className?: string;
}

export function PresentationCTA({ buttons, className }: PresentationCTAProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {buttons.map((button) => {
        const Icon = button.icon;

        const variantStyles = {
          primary:
            "bg-white text-black hover:bg-gray-200",
          secondary:
            "border border-white/20 bg-transparent text-white hover:bg-white/10",
        };

        return (
          <Link
            key={button.id}
            href={button.href}
            className={cn(
              "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors",
              variantStyles[button.variant]
            )}
          >
            {button.label}
            {Icon && <Icon className="ml-2 h-4 w-4" />}
          </Link>
        );
      })}
    </div>
  );
}
