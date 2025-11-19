import { Github, Linkedin, Mail } from "lucide-react";
import type { Highlight, ContactInfoItem, CTAButton } from "@/types/contact";

export const highlights: Highlight[] = [
  {
    id: "experience",
    title: "7+ Years",
    description: "of proven experience in full-stack development",
  },
  {
    id: "leadership",
    title: "Team Leadership",
    description: "with multicultural teams across time zones",
  },
  {
    id: "results",
    title: "Results-driven",
    description: "approach with focus on delivery and optimization",
  },
  {
    id: "expertise",
    title: "Full-stack expertise",
    description: "in modern web and mobile technologies",
  },
];

export const contactInfo: ContactInfoItem[] = [
  {
    id: "email",
    label: "Email",
    value: "adamspurry@gmail.com",
    href: "mailto:adamspurry@gmail.com",
    icon: Mail,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/adams999",
    href: "https://github.com/adams999",
    icon: Github,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/adamsjcontreras",
    href: "https://www.linkedin.com/in/adamsjcontreras",
    icon: Linkedin,
    external: true,
  },
];

export const ctaButtons: CTAButton[] = [
  {
    id: "email-cta",
    label: "Send me an email",
    href: "mailto:adamspurry@gmail.com",
    icon: Mail,
    variant: "primary",
  },
  {
    id: "linkedin-cta",
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/adamsjcontreras",
    icon: Linkedin,
    variant: "secondary",
    external: true,
  },
];
