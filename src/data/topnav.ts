import { ArrowRight } from "lucide-react";
import type { TopNavData } from "@/types/topnav";

export const topNavData: TopNavData = {
  badge: {
    text: "Available for new projects",
    status: "available",
  },
  title: {
    name: "Adams J. Contreras",
    role: "Full Stack Developer",
  },
  description:
    "Full Stack Developer with over 7 years of experience building scalable, high-performance web and mobile solutions.",
  buttons: [
    {
      id: "view-work",
      label: "View Work",
      href: "#projects",
      icon: ArrowRight,
      variant: "primary",
    },
    {
      id: "contact-me",
      label: "Contact Me",
      href: "#contact",
      variant: "secondary",
    },
  ],
};
