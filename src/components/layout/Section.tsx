import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
