import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types/skills";
import { getTechIcon } from "@/lib/techIcons";

interface SkillCardProps {
  category: SkillCategory;
  className?: string;
}

// Mapeo de iconos Font Awesome por categoría
const categoryIcons: Record<string, { icon: string; color: string }> = {
  frontend: { icon: "fas fa-laptop-code", color: "text-gray-600 dark:text-white" },
  backend: { icon: "fas fa-server", color: "text-gray-600 dark:text-white" },
  mobile: { icon: "fas fa-mobile-screen-button", color: "text-gray-600 dark:text-white" },
  database: { icon: "fas fa-database", color: "text-gray-600 dark:text-white" },
  devops: { icon: "fas fa-cloud-arrow-up", color: "text-gray-600 dark:text-white" },
  tools: { icon: "fas fa-toolbox", color: "text-gray-600 dark:text-white" }
};

// Estilos con colores suaves - Diseño elegante y profesional
const categoryStyles = {
  frontend: {
    gradient: "from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30",
    border: "border-blue-300 dark:border-blue-800/25 hover:border-blue-400 dark:hover:border-blue-700/40",
    skillBg: "bg-blue-200 dark:bg-blue-900/20 hover:bg-blue-300 dark:hover:bg-blue-800/30 border-blue-300 dark:border-blue-800/20",
    iconBg: "bg-blue-300 dark:bg-blue-800/25"
  },
  backend: {
    gradient: "from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30",
    border: "border-emerald-300 dark:border-emerald-800/25 hover:border-emerald-400 dark:hover:border-emerald-700/40",
    skillBg: "bg-emerald-200 dark:bg-emerald-900/20 hover:bg-emerald-300 dark:hover:bg-emerald-800/30 border-emerald-300 dark:border-emerald-800/20",
    iconBg: "bg-emerald-300 dark:bg-emerald-800/25"
  },
  mobile: {
    gradient: "from-violet-100 to-purple-100 dark:from-violet-950/30 dark:to-purple-950/30",
    border: "border-violet-300 dark:border-violet-800/25 hover:border-violet-400 dark:hover:border-violet-700/40",
    skillBg: "bg-violet-200 dark:bg-violet-900/20 hover:bg-violet-300 dark:hover:bg-violet-800/30 border-violet-300 dark:border-violet-800/20",
    iconBg: "bg-violet-300 dark:bg-violet-800/25"
  },
  database: {
    gradient: "from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30",
    border: "border-amber-300 dark:border-amber-800/25 hover:border-amber-400 dark:hover:border-amber-700/40",
    skillBg: "bg-amber-200 dark:bg-amber-900/20 hover:bg-amber-300 dark:hover:bg-amber-800/30 border-amber-300 dark:border-amber-800/20",
    iconBg: "bg-amber-300 dark:bg-amber-800/25"
  },
  devops: {
    gradient: "from-cyan-100 to-sky-100 dark:from-cyan-950/30 dark:to-sky-950/30",
    border: "border-cyan-300 dark:border-cyan-800/25 hover:border-cyan-400 dark:hover:border-cyan-700/40",
    skillBg: "bg-cyan-200 dark:bg-cyan-900/20 hover:bg-cyan-300 dark:hover:bg-cyan-800/30 border-cyan-300 dark:border-cyan-800/20",
    iconBg: "bg-cyan-300 dark:bg-cyan-800/25"
  },
  tools: {
    gradient: "from-slate-200 to-gray-200 dark:from-slate-950/30 dark:to-gray-950/30",
    border: "border-slate-300 dark:border-slate-800/25 hover:border-slate-400 dark:hover:border-slate-700/40",
    skillBg: "bg-slate-200 dark:bg-slate-900/20 hover:bg-slate-300 dark:hover:bg-slate-800/30 border-slate-300 dark:border-slate-800/20",
    iconBg: "bg-slate-300 dark:bg-slate-800/25"
  }
} as const;

export function SkillCard({ category, className }: SkillCardProps) {
  const { id, title, skills } = category;
  const styles = categoryStyles[id as keyof typeof categoryStyles];
  const categoryIcon = categoryIcons[id] || { icon: "fas fa-code", color: "text-gray-600" };

  return (
    <div
      className={cn(
        "group relative rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-white/5",
        `bg-gradient-to-br ${styles.gradient}`,
        styles.border,
        "backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
            styles.iconBg,
            "group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-400/30 dark:group-hover:shadow-white/10 group-hover:rotate-3"
          )}>
            <i className={`${categoryIcon.icon} ${categoryIcon.color} text-2xl transition-all duration-300 group-hover:scale-110`}></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-100 group-hover:translate-x-1">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            const techConfig = getTechIcon(skill.name);
            return (
              <span
                key={skill.name}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-200 flex items-center gap-2",
                  styles.skillBg,
                  "hover:text-gray-900 dark:hover:text-white"
                )}
              >
                <i className={`${techConfig.icon} ${techConfig.color}`}></i>
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
