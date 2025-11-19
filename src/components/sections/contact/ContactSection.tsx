import { Section } from "@/components/layout/Section";
import { ContactHighlights } from "@/components/sections/contact/ContactHighlights";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";
import { highlights, contactInfo, ctaButtons } from "@/data/contact";

export function ContactSection() {
  return (
    <Section id="contact" className="mb-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Let's Work Together</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities and exciting projects. Let's connect and build something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ContactHighlights highlights={highlights} />
          <ContactInfo contactInfo={contactInfo} />
        </div>

        <ContactCTA buttons={ctaButtons} />
      </div>
    </Section>
  );
}
