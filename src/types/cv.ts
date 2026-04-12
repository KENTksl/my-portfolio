export type CvContact = {
  label: string;
  value: string;
  href?: string;
};

export type CvSkillGroup = {
  title: string;
  items: string[];
};

export type CvProject = {
  name: string;
  period: string;
  subtitle: string;
  technologies: string[];
  repositoryUrl?: string;
  highlights: string[];
};

export type CvEducation = {
  degree: string;
  school: string;
  period: string;
  specialization?: string;
  gpa?: string;
  expectedGraduation?: string;
};

export type CvData = {
  fullName: string;
  headline: string;
  location: string;
  birthDate?: string;
  avatarSrc?: string;
  contacts: CvContact[];
  summary: string;
  skills: CvSkillGroup[];
  projects: CvProject[];
  education: CvEducation[];
};

