import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/techIcons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  className?: string;
}

export function ProjectCard({ title, description, tags, link, className }: ProjectCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 transition-all hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-lg",
      className
    )}>
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {title}
        </h3>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full transition-transform duration-300 hover:rotate-45 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 text-gray-900 dark:text-white transition-all duration-300 hover:scale-110 hover:from-blue-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <ArrowUpRight className="h-4 w-4 " />
            <span className="sr-only">View project</span>
          </Link>
        )}
      </div>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-white/10 flex items-center gap-1.5"
          >
            <i className={getTechIcon(tag)}></i>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
