import { Section } from "@/components/layout/Section";
import { SkillCard } from "@/components/sections/skills/SkillCard";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-center">Technical Skills</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Comprehensive expertise across modern web technologies, mobile development, and cloud infrastructure
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
