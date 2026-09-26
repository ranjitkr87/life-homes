export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'services-residential' 
  | 'services-interior' 
  | 'services-renovation' 
  | 'gallery' 
  | 'blog' 
  | 'blog-detail' 
  | 'contact';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'interior' | 'renovation';
  categoryLabel: string;
  location: string;
  yearCompleted: number;
  squareFeet: number;
  timelineMonths: number;
  architecturalStyle: string;
  heroImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  summary: string;
  challenge: string;
  solution: string;
  structuralInnovations: string[];
  materialsUsed: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ServiceDetail {
  id: string;
  slug: 'residential-construction' | 'interior-design' | 'renovation';
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  featuredImages: string[];
  metrics: { label: string; value: string; detail: string }[];
  processSteps: {
    step: string;
    name: string;
    description: string;
    deliverables: string[];
  }[];
  specifications: {
    category: string;
    items: string[];
  }[];
  signatureMaterials: {
    name: string;
    origin: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Architecture' | 'Civil Engineering' | 'Interior Haute' | 'Estate Restoration';
  readTime: string;
  publishedDate: string;
  isoDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
    pullQuote?: string;
    image?: string;
    imageCaption?: string;
  }[];
  keyTakeaways: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  title: string;
  estateName: string;
  location: string;
  quote: string;
  projectType: string;
  avatar: string;
  year: number;
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogImage: string;
  keywords: string[];
  schemaData: Record<string, unknown>;
}
