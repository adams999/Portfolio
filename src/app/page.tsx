import { TopNavSection } from "@/components/TopNavSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* TopNav Section */}
      <TopNavSection />

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
