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
            "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-shadow",
          secondary:
            "border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900/10 dark:border-white dark:text-white dark:hover:bg-white/10 backdrop-blur-sm",
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
