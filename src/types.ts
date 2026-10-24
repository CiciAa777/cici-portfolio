// A type describes the shape of data. It does not create browser elements.
export type ProjectCategory = 'AI & Agents' | 'Data & ML' | 'Visualization & Decisions';
export interface Metric { value: string; label: string }
export interface ProjectLink { label: string; url: string }
export interface Project {
  title: string;
  dates: string;
  description: string;
  featured: boolean;
  category: ProjectCategory;
  status: string;
  tags: string[];
  metrics: Metric[];
  bullets: string[];
  links: ProjectLink[];
}
export interface Experience {
  role: string;
  organization: string;
  dates: string;
  featured: boolean;
  metrics: Metric[];
  bullets: string[];
}
