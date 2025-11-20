"use client";

import { useTranslations } from "next-intl";
import { PresentationBadge } from "@/components/sections/presentation/PresentationBadge";
import { PresentationTitle } from "@/components/sections/presentation/PresentationTitle";
import { PresentationDescription } from "@/components/sections/presentation/PresentationDescription";
import { PresentationCTA } from "@/components/sections/presentation/PresentationCTA";
import { PresentationImage } from "@/components/sections/presentation/PresentationImage";
import { ArrowRight } from "lucide-react";
import Lightning from "../ui-efects/Lightning";

export function PresentationSection() {
  const t = useTranslations("presentation");

  const badge = {
    text: t("badge"),
    status: "available" as const,
  };

  const title = {
    name: t("name"),
    role: t("role"),
  };

  const buttons = [
    {
      id: "view-work",
      label: t("viewWork"),
      href: "#projects",
      icon: ArrowRight,
      variant: "primary" as const,
    },
    {
      id: "contact-me",
      label: t("contactMe"),
      href: "#contact",
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="relative pb-12 flex min-h-[80vh] flex-col justify-center overflow-hidden px-4 pt-16">
      {/* Lightning Background */}
      <div className="absolute inset-0 -z-20">
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={3} />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <PresentationBadge badge={badge} />
            <PresentationTitle title={title} />
            <PresentationDescription description={t("description")} />
            <PresentationCTA buttons={buttons} />
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <PresentationImage />
          </div>
        </div>
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute -top-24 -right-24 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute top-1/2 -left-24 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
    </section>
  );
}
