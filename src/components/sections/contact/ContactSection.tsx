'use client';

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { ContactHighlights } from "@/components/sections/contact/ContactHighlights";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";
import { contactInfo } from "@/data/contact";

export function ContactSection() {
  const t = useTranslations('contact');

  const highlights = [
    {
      id: "experience",
      title: t('highlight1Title'),
      description: t('highlight1Description'),
    },
    {
      id: "leadership",
      title: t('highlight2Title'),
      description: t('highlight2Description'),
    },
    {
      id: "results",
      title: t('highlight3Title'),
      description: t('highlight3Description'),
    },
    {
      id: "expertise",
      title: t('highlight4Title'),
      description: t('highlight4Description'),
    },
  ];

  return (
    <Section id="contact" className="mb-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">{t('title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ContactHighlights highlights={highlights} />
          <ContactInfo contactInfo={contactInfo} />
        </div>

        <ContactCTA />
      </div>
    </Section>
  );
}
