import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types/skills";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  type LucideIcon
} from "lucide-react";

interface SkillCardProps {
  category: SkillCategory;
  className?: string;
}

// Mapeo de iconos por categoría
const categoryIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  mobile: Smartphone,
  database: Database,
  devops: Cloud,
  tools: Wrench
};

// Estilos con colores suaves - Diseño elegante y profesional
const categoryStyles = {
  frontend: {
    gradient: "from-blue-950/30 to-indigo-950/30",
    border: "border-blue-800/25 hover:border-blue-700/40",
    skillBg: "bg-blue-900/20 hover:bg-blue-800/30 border-blue-800/20",
    iconBg: "bg-blue-800/25"
  },
  backend: {
    gradient: "from-emerald-950/30 to-teal-950/30",
    border: "border-emerald-800/25 hover:border-emerald-700/40",
    skillBg: "bg-emerald-900/20 hover:bg-emerald-800/30 border-emerald-800/20",
    iconBg: "bg-emerald-800/25"
  },
  mobile: {
    gradient: "from-violet-950/30 to-purple-950/30",
    border: "border-violet-800/25 hover:border-violet-700/40",
    skillBg: "bg-violet-900/20 hover:bg-violet-800/30 border-violet-800/20",
    iconBg: "bg-violet-800/25"
  },
  database: {
    gradient: "from-amber-950/30 to-orange-950/30",
    border: "border-amber-800/25 hover:border-amber-700/40",
    skillBg: "bg-amber-900/20 hover:bg-amber-800/30 border-amber-800/20",
    iconBg: "bg-amber-800/25"
  },
  devops: {
    gradient: "from-cyan-950/30 to-sky-950/30",
    border: "border-cyan-800/25 hover:border-cyan-700/40",
    skillBg: "bg-cyan-900/20 hover:bg-cyan-800/30 border-cyan-800/20",
    iconBg: "bg-cyan-800/25"
  },
  tools: {
    gradient: "from-slate-950/30 to-gray-950/30",
    border: "border-slate-800/25 hover:border-slate-700/40",
    skillBg: "bg-slate-900/20 hover:bg-slate-800/30 border-slate-800/20",
    iconBg: "bg-slate-800/25"
  }
} as const;

export function SkillCard({ category, className }: SkillCardProps) {
  const { id, title, skills } = category;
  const styles = categoryStyles[id as keyof typeof categoryStyles];
  const Icon = categoryIcons[id] || Code2;

  return (
    <div
      className={cn(
        "group relative rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-white/5",
        `bg-gradient-to-br ${styles.gradient}`,
        styles.border,
        "backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
            styles.iconBg,
            "group-hover:scale-105 group-hover:shadow-md group-hover:shadow-white/10"
          )}>
            <Icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:text-gray-100 group-hover:translate-x-1">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={cn(
                "rounded-md border px-3 py-1.5 text-sm font-medium text-gray-200 transition-colors duration-200",
                styles.skillBg,
                "hover:text-white"
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
