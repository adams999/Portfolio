'use client';

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { AboutInfo } from "@/components/sections/about/AboutInfo";
import { AboutDetails } from "@/components/sections/about/AboutDetails";
import { SocialLinks } from "@/components/sections/about/SocialLinks";

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <Section id="about" className="bg-gray-100 dark:bg-white/5 transition-colors">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">{t('title')}</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <AboutInfo />
            <SocialLinks className="pt-4" />
          </div>
          <AboutDetails />
        </div>
      </div>
    </Section>
  );
}
