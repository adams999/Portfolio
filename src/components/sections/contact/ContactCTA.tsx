import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CTAButton } from "@/types/contact";

interface ContactCTAProps {
  buttons: CTAButton[];
  className?: string;
}

export function ContactCTA({ buttons, className }: ContactCTAProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-4", className)}>
      {buttons.map((button) => {
        const Icon = button.icon;
        const linkProps = button.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};

        const variantStyles = {
          primary:
            "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50",
          secondary:
            "border border-white/20 bg-white/5 text-white hover:bg-white/10",
        };

        return (
          <Link
            key={button.id}
            href={button.href}
            {...linkProps}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all hover:scale-105",
              variantStyles[button.variant]
            )}
          >
            <Icon className="h-5 w-5" />
            {button.label}
          </Link>
        );
      })}
    </div>
  );
}
