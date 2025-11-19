import { type LucideIcon } from "lucide-react";

export interface Highlight {
  id: string;
  title: string;
  description: string;
}

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export interface CTAButton {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  variant: "primary" | "secondary";
  external?: boolean;
}
