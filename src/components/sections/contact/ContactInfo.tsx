'use client';

import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ContactInfoItem } from "@/types/contact";

interface ContactInfoProps {
  contactInfo: ContactInfoItem[];
  className?: string;
}

export function ContactInfo({ contactInfo, className }: ContactInfoProps) {
  const t = useTranslations('contact');

  return (
    <div className={cn("bg-white/5 rounded-2xl p-6 border border-white/10", className)}>
      <h3 className="text-xl font-semibold text-white mb-4">{t('contactInformation')}</h3>
      <div className="space-y-4 text-gray-400">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          const linkProps = info.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <div key={info.id} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-500">{t(info.id as 'email' | 'github' | 'linkedin')}</p>
                <Link
                  href={info.href}
                  {...linkProps}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {info.value}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
