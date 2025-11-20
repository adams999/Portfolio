'use client';

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/20 dark:supports-[backdrop-filter]:bg-black/20 transition-colors">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <Image src="/adams.png" alt="Adams Logo" width={32} height={32} className="rounded-full" />
          <span className="hidden sm:inline">Adams C.Dev</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
            {t('about')}
          </Link>
          <Link href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
            {t('projects')}
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
            {t('contact')}
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
