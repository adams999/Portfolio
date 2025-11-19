import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfoItem } from "@/types/contact";

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
