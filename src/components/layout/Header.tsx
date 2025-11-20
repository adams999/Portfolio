'use client';

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/20 transition-colors shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 transition-colors">
          <Image src="/adams.png" alt="Adams Logo" width={32} height={32} className="rounded-full ring-2 ring-gray-200 dark:ring-white/10" />
          <span className="hidden sm:inline">Adams C.Dev</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-6 text-sm font-medium">
          <Link href="#about" className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-colors relative group">
            <span>{t('about')}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#projects" className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-colors relative group">
            <span>{t('projects')}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-colors relative group">
            <span>{t('contact')}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
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
