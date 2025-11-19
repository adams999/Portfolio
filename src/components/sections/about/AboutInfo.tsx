'use client';

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface AboutInfoProps {
  className?: string;
}

export function AboutInfo({ className }: AboutInfoProps) {
  const t = useTranslations('about');

  return (
    <div className={cn("space-y-6 text-gray-400", className)}>
      <p>
        {t.rich('intro', {
          name: (chunks: React.ReactNode) => <span className="text-white font-semibold">{chunks}</span>,
        })}
      </p>
      <p>
        {t.rich('experience', {
          backend: (chunks: React.ReactNode) => <span className="text-white">{chunks}</span>,
          frontend: (chunks: React.ReactNode) => <span className="text-white">{chunks}</span>,
          teamLead: (chunks: React.ReactNode) => <span className="text-white font-semibold">{chunks}</span>,
        })}
      </p>
      <p>
        {t('passion')}
      </p>
    </div>
  );
}
