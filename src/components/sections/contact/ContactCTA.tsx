'use client';

import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mail, Linkedin } from "lucide-react";

interface ContactCTAProps {
  className?: string;
}

export function ContactCTA({ className }: ContactCTAProps) {
  const t = useTranslations('contact');

  const buttons = [
    {
      id: "email-cta",
      label: t('sendEmail'),
      href: "mailto:adamspurry@gmail.com",
      icon: Mail,
      variant: "primary" as const,
    },
    {
      id: "linkedin-cta",
      label: t('connectLinkedIn'),
      href: "https://www.linkedin.com/in/adamsjcontreras",
      icon: Linkedin,
      variant: "secondary" as const,
      external: true,
    },
  ];

  return (
    <div className={cn("flex flex-wrap justify-center gap-4", className)}>
      {buttons.map((button) => {
        const Icon = button.icon;
        const linkProps = button.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};

        const variantStyles = {
          primary:
            "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-500/50",
          secondary:
            "border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10",
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
