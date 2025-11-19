import { cn } from "@/lib/utils";

interface DetailItem {
  label: string;
  value: string;
}

interface AboutDetailsProps {
  details?: DetailItem[];
  className?: string;
}

const defaultDetails: DetailItem[] = [
  { label: "Nationality", value: "Venezuelan" },
  { label: "Experience", value: "+7 years" },
  { label: "Roles", value: "Full Stack Developer, Team Lead" },
];

export function AboutDetails({ details = defaultDetails, className }: AboutDetailsProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="pt-4 space-y-2 text-sm text-gray-400">
        {details.map((detail) => (
          <p key={detail.label}>
            <span className="text-white font-semibold">{detail.label}:</span> {detail.value}
          </p>
        ))}
      </div>
    </div>
  );
}
