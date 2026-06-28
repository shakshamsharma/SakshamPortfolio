import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type AboutCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Skill = {
  name: string;
  level: number;
  iconUrl?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  link?: string;
};

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  demo?: string;
  accent: "cyan" | "emerald" | "violet";
};
