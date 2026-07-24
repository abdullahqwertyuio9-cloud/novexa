export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  bulletPoints: string[];
  deliverables: string[];
  popularFor: string[];
  estimatedTimeline: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Website Development' | 'Web Applications' | 'UI/UX Design' | 'AI Chatbots' | 'AI Agents';
  description: string;
  clientIndustry: string;
  tags: string[];
  metrics: string;
  imageUrl: string;
  featured: boolean;
  conceptType?: string;
  fullOverview?: string;
  features?: string[];
  businessBenefits?: string[];
  technologies?: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyActivities: string[];
}

export interface WhyNovexaPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  statNumber: string;
  statLabel: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Services & Tech' | 'Pricing & Delivery';
  question: string;
  answer: string;
}

export interface TargetIndustry {
  id: string;
  name: string;
  iconName: string;
  description: string;
  recommendedService: string;
  keyBenefits: string[];
}
