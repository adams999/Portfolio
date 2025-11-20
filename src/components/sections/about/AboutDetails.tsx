'use client';

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface AboutDetailsProps {
  className?: string;
}

export function AboutDetails({ className }: AboutDetailsProps) {
  const t = useTranslations('about');

  const details = [
    { label: t('nationality'), value: t('nationalityValue') },
    { label: t('experienceLabel'), value: t('experienceValue') },
    { label: t('roles'), value: t('rolesValue') },
  ];

  return (
    <div className={cn("space-y-6", className)}>
      <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {details.map((detail) => (
          <p key={detail.label}>
            <span className="text-gray-900 dark:text-white font-semibold">{detail.label}:</span> {detail.value}
          </p>
        ))}
      </div>
    </div>
  );
}
