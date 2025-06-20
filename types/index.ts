export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  count?: string;
  icon: React.ReactNode;
}

export interface CodeSnippet {
  language: string;
  code: string;
  html?: string;
}

export interface Feature {
  number: string;
  tagline: string;
  title: string;
  description: string;
}

export interface GridFeature {
  icon: string;
  category: string;
  title: string;
  description: string;
  additionalContent?: React.ReactNode;
}

export interface Testimonial {
  logo: React.ReactNode;
  description: string;
  logoAlt?: string;
  marginTop?: string;
}

export interface TabContent {
  label: string;
  content: CodeSnippet;
}

export interface ErrorItem {
  message: string;
  type: 'error' | 'warning';
}

export interface CommandGridItem {
  command: string;
  errors: ErrorItem[];
}

export interface FeatureItem {
  number: string;
  subtitle: string;
  title: string;
  description: string;
}