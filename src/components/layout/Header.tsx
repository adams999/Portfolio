'use client';

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

export function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight hover:text-gray-300 transition-colors">
          <Image src="/adams.png" alt="Adams Logo" width={32} height={32} className="rounded-full" />
          <span className="hidden sm:inline">Adams C.Dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-300 transition-colors">
            {t('about')}
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors">
            {t('projects')}
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">
            {t('contact')}
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
