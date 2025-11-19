'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import type { Locale } from '@/i18n/config';

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const currentLocale = (params.locale as Locale) || 'en';

  const handleLanguageChange = (locale: Locale) => {
    const scrollPosition = window.scrollY;

    startTransition(() => {
      router.replace(pathname, { locale, scroll: false });

      // Restore scroll position after navigation
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    });
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-sm font-medium"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {languages.find((lang) => lang.code === currentLocale)?.flag}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              disabled={isPending}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150
                ${
                  currentLocale === language.code
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }
                ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="text-sm font-medium">{language.label}</span>
              {currentLocale === language.code && (
                <span className="ml-auto text-xs text-gray-400">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
