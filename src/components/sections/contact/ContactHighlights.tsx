import { cn } from "@/lib/utils";
import type { Highlight } from "@/types/contact";

interface ContactHighlightsProps {
  highlights: Highlight[];
  className?: string;
}

export function ContactHighlights({ highlights, className }: ContactHighlightsProps) {
  return (
    <div className={cn("bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm", className)}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Work With Me?</h3>
      <ul className="space-y-3 text-gray-600 dark:text-gray-400">
        {highlights.map((highlight) => (
          <li key={highlight.id} className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
            <span>
              <span className="text-gray-900 dark:text-white font-semibold">{highlight.title}</span> {highlight.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
