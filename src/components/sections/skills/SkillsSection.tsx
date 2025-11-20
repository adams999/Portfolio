'use client';

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SkillCard } from "@/components/sections/skills/SkillCard";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  const t = useTranslations('skills');

  return (
    <Section id="skills" className="bg-gray-100 dark:bg-white/5 transition-colors">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-center text-gray-900 dark:text-white">{t('title')}</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Section>
  );
}
