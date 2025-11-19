import { Section } from "@/components/Section";
import { AboutInfo } from "@/components/AboutInfo";
import { AboutDetails } from "@/components/AboutDetails";
import { SocialLinks } from "@/components/SocialLinks";

export function AboutSection() {
  return (
    <Section id="about" className="bg-white/5">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">About Me</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <AboutInfo />
            <SocialLinks className="pt-4" />
          </div>
          <AboutDetails />
        </div>
      </div>
    </Section>
  );
}
