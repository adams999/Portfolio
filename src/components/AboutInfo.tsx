import { cn } from "@/lib/utils";

interface AboutInfoProps {
  className?: string;
}

export function AboutInfo({ className }: AboutInfoProps) {
  return (
    <div className={cn("space-y-6 text-gray-400", className)}>
      <p>
        I'm <span className="text-white font-semibold">Adams J. Contreras Ramírez</span>, a Venezuelan developer with over 7 years of experience in web technologies.
      </p>
      <p>
        My expertise spans both <span className="text-white">backend</span> and <span className="text-white">frontend</span> development, as well as mobile applications. I've worked as a <span className="text-white font-semibold">Team Lead</span> managing multicultural teams, always focused on results, delivery timelines, and code optimization.
      </p>
      <p>
        I'm passionate about creating efficient and scalable technology solutions, prioritizing best practices and the quality of the final product.
      </p>
    </div>
  );
}
