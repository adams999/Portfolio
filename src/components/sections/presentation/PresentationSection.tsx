'use client';

import { useTranslations } from "next-intl";
import { PresentationBadge } from "@/components/sections/presentation/PresentationBadge";
import { PresentationTitle } from "@/components/sections/presentation/PresentationTitle";
import { PresentationDescription } from "@/components/sections/presentation/PresentationDescription";
import { PresentationCTA } from "@/components/sections/presentation/PresentationCTA";
import { ArrowRight } from "lucide-react";

export function PresentationSection() {
  const t = useTranslations('presentation');

  const badge = {
    text: t('badge'),
    status: 'available' as const,
  };

  const title = {
    name: t('name'),
    role: t('role'),
  };

  const buttons = [
    {
      id: "view-work",
      label: t('viewWork'),
      href: "#projects",
      icon: ArrowRight,
      variant: "primary" as const,
    },
    {
      id: "contact-me",
      label: t('contactMe'),
      href: "#contact",
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden px-4 pt-16">
      <div className="container mx-auto max-w-4xl">
        <PresentationBadge badge={badge} />
        <PresentationTitle title={title} />
        <PresentationDescription description={t('description')} />
        <PresentationCTA buttons={buttons} />
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute -top-24 -right-24 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute top-1/2 -left-24 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
    </section>
  );
}
