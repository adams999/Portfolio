import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types/skills";

interface SkillCardProps {
  category: SkillCategory;
  className?: string;
}

export function SkillCard({ category, className }: SkillCardProps) {
  const { title, icon, skills, gradient, borderColor, borderHoverColor, bgColor, bgHoverColor, iconBg } = category;

  return (
    <div
      className={cn(
        "rounded-2xl p-6 border transition-all hover:scale-105",
        `bg-gradient-to-br ${gradient.from} ${gradient.to}`,
        `${borderColor} hover:${borderHoverColor}`,
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", iconBg)}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-sm text-gray-300 transition-colors",
              `${bgColor} ${borderColor} hover:${bgHoverColor}`
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
