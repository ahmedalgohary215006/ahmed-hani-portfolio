export type Lang = 'en' | 'ar';

export interface Bilingual {
  en: string;
  ar: string;
}

export interface PersonalInfo {
  fullName: Bilingual;
  title: Bilingual;
  location: Bilingual;
  monogram: string;
  photoUrl?: string;
  photoAlt?: Bilingual;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: Bilingual;
  linkedin: string;
  github?: string;
  cvPath: string;
}

export interface SocialLink {
  label: Bilingual;
  url: string;
  icon: 'linkedin' | 'github' | 'email' | 'phone';
}

export interface EducationItem {
  id: string;
  degree: Bilingual;
  institution: Bilingual;
  institutionShort: string;
  location: Bilingual;
  expectedGraduation: string;
  average: string;
  classification: Bilingual;
  coursework: Bilingual[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: Bilingual;
  location: Bilingual;
  periodStart: string;
  periodEnd: string;
  period: Bilingual;
  details: Bilingual[];
  year: number;
  certificateUrl?: string;
}

export interface SkillGroupData {
  id: string;
  title: Bilingual;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: Bilingual;
  year: number;
  category: Bilingual;
  tools: string[];
  description: Bilingual;
  result: Bilingual;
  linkedinUrl?: string;
  imageUrl?: string;
  imageAlt?: Bilingual;
}

export interface CertificateItem {
  id: string;
  title: Bilingual;
  issuer: Bilingual;
  issueDate: Bilingual;
  year: number;
  credentialUrl: string;
  linkedinUrl?: string;
  imageUrl?: string;
  imageAlt?: Bilingual;
}

export interface ActivityItem {
  id: string;
  title: Bilingual;
  year: number;
  type: Bilingual;
  description: Bilingual;
  linkedinUrl?: string;
}

export interface AnnualBreakdown {
  year: number;
  projects: number;
  internships: number;
  certificates: number;
  activities: number;
  total: number;
}

export interface LinkedInMatch {
  originalUrl: string;
  resolvedUrl?: string;
  assignedTo: string;
  confidence: 'confirmed' | 'high' | 'medium' | 'low' | 'unresolved';
  evidence: Bilingual;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalSummary: Bilingual;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skillGroups: SkillGroupData[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
  activities: ActivityItem[];
  linkedInMatches: LinkedInMatch[];
  unmatchedLinkedInLinks: string[];
}
