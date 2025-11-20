import Link from "next/link";
import { Github, Linkedin, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

const defaultLinks: SocialLink[] = [
  {
    href: "https://github.com/adams999",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/adamsjcontreras",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export function SocialLinks({ links = defaultLinks, className }: SocialLinksProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label={link.label}
          >
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}
