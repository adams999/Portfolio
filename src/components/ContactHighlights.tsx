import { cn } from "@/lib/utils";
import type { Highlight } from "@/types/contact";

interface ContactHighlightsProps {
  highlights: Highlight[];
  className?: string;
}

export function ContactHighlights({ highlights, className }: ContactHighlightsProps) {
  return (
    <div className={cn("bg-white/5 rounded-2xl p-6 border border-white/10", className)}>
      <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h3>
      <ul className="space-y-3 text-gray-400">
        {highlights.map((highlight) => (
          <li key={highlight.id} className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>
              <span className="text-white font-semibold">{highlight.title}</span> {highlight.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
