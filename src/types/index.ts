export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: "Aprendendo" | "Intermediário" | "Avançado";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  highlight?: boolean;
}

export interface StudyItem {
  topic: string;
  icon: string;
}
