export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  gradient: {
    from: string;
    to: string;
  };
  borderColor: string;
  borderHoverColor: string;
  bgColor: string;
  bgHoverColor: string;
  iconBg: string;
}
