export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  bgGradient: string;
  deliverables: string[];
  techStack: string[];
  averageTimeline: string;
  typicalROI: string;
  featuredCaseStudyTitle?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Website' | 'Branding' | 'Marketing' | 'SEO' | 'AI' | 'E-commerce';
  image: string;
  challenge: string;
  solution: string;
  technology: string[];
  results: {
    metric: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  verified?: boolean;
  industry: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stat?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestone: string;
}

export interface WhyChooseUsCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  keyOutputs: string[];
  duration: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Pricing & Process' | 'Tech & SEO' | 'AI & Growth';
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: 'AI & Automation' | 'Web Design' | 'SEO & Growth' | 'Brand Strategy';
  summary: string;
  content: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
}

export interface ProjectEstimatorState {
  services: string[];
  industry: string;
  budgetTier: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  details: string;
}
