'use client';

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const t = useTranslations('projects');

  return (
    <Section id="projects">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-center">{t('title')}</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={t(`items.${project.id}.title`)}
              description={t(`items.${project.id}.description`)}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
