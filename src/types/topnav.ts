import { LucideIcon } from "lucide-react";

export interface TopNavBadge {
  text: string;
  status: "available" | "busy" | "unavailable";
}

export interface TopNavTitle {
  name: string;
  role: string;
}

export interface TopNavButton {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  variant: "primary" | "secondary";
}

export interface TopNavData {
  badge: TopNavBadge;
  title: TopNavTitle;
  description: string;
  buttons: TopNavButton[];
}
