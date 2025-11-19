import { PresentationSection } from "@/components/sections/presentation/PresentationSection";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { SkillsSection } from "@/components/sections/skills/SkillsSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Presentation Section */}
      <PresentationSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
