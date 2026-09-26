import { Testimonial } from '../types';

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  notableAchievement: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Julian Sterling, PE, SE',
    role: 'Founder & Principal Civil Engineer',
    credentials: 'MIT Civil & Environmental Engineering | 24 Years Experience',
    bio: 'Julian began his career engineering ultra-tall towers and deep marine docks before founding Life Homes & Developers. He personally stamps all foundation and seismic calculations, bringing skyscraper engineering rigor to private residential compounds.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    notableAchievement: 'Engineered the deepest residential micro-pile foundation in Bel Air (72 ft into granite bedrock).'
  },
  {
    name: 'Arthur Sterling, FAIA',
    role: 'Chief Architectural Officer',
    credentials: 'Harvard GSD Master of Architecture | Fellow of the American Institute of Architects',
    bio: 'Renowned for his sculptural restraint and mastery of natural illumination, Arthur has designed estates featured in Architectural Digest, Wallpaper*, and the Venice Biennale. He harmonizes dramatic civil cantilevers with serene organic living.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    notableAchievement: 'Recipient of the 2024 Global Residential Design Excellence Award.'
  },
  {
    name: 'Sofia Althaus',
    role: 'Director of Haute Interior Architecture',
    credentials: 'Politecnico di Milano Interior Architecture | 16 Years Experience',
    bio: 'Sofia directs our bespoke interior ateliers in Milan and New York. She spends three months each year hand-selecting raw marble blocks in Tuscany and collaborating with third-generation Venetian joiners and brass artisans.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    notableAchievement: 'Curated 140 tons of rare Calacatta Viola for Manhattan’s premier private triplex.'
  },
  {
    name: 'Christian Vance, MSc',
    role: 'Director of Structural Innovation & Sustainability',
    credentials: 'ETH Zurich Structural Systems | LEED Fellow',
    bio: 'Christian leads our research into self-healing crystalline concrete, carbon-sequestering mass timber framing, and geothermal closed-loop microgrids. He ensures every Life Homes estate is future-proofed for the next century.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    notableAchievement: 'Delivered California’s first completely off-grid net-positive 18,000 sq ft luxury estate.'
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Marcus Vance',
    title: 'Managing Partner, Vance Capital Holdings',
    estateName: 'The Obsidian Ridge Estate',
    location: 'Bel Air, California',
    quote: 'Life Homes & Developers turned what three prior engineering teams labeled impossible into an awe-inspiring sanctuary of structural perfection. Their civil precision is unmatched.',
    projectType: 'Ground-Up Bespoke Construction',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    year: 2025
  },
  {
    id: 'test-2',
    clientName: 'Evelyn St. Claire',
    title: 'International Fine Art Patron & Philanthropist',
    estateName: 'Tribeca Triplex Crown',
    location: 'New York City',
    quote: 'Their mastery of light, bespoke millwork, and sensory materials elevated this space beyond an apartment into a true work of living art. The acoustic silence in the center of Manhattan is pure magic.',
    projectType: 'Haute Interior Architecture',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    year: 2025
  },
  {
    id: 'test-3',
    clientName: 'Lord Harrison Thorne',
    title: 'Private Trustee & Estate Conservator',
    estateName: 'Stonefield Manor',
    location: 'Greenwich, Connecticut',
    quote: 'They breathed a century of new life into our 1928 family estate with uncompromising civil engineering and sublime historic sensitivity. The subterranean wellness spa is our family sanctuary.',
    projectType: 'Turnkey Historical Renovation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    year: 2024
  }
];

export const companyMilestones = [
  {
    year: '2008',
    title: 'The Founding of Life Homes & Developers',
    description: 'Established in New York City with a singular vision: to bridge the gap between monumental commercial civil engineering and bespoke luxury residential architecture.'
  },
  {
    year: '2014',
    title: 'Expansion to West Coast Architectural Ateliers',
    description: 'Inaugurated our Beverly Hills engineering studio specializing in seismic hillside civil excavation and cantilevered cliffside estates.'
  },
  {
    year: '2019',
    title: 'Launch of the Milan Stone & Millwork Atelier',
    description: 'Opened our dedicated quarry sourcing office in Verona and artisanal cabinetry workshop in Brianza, Italy, granting our clients direct quarry access.'
  },
  {
    year: '2023',
    title: 'Pioneered Zero-Tolerance Laser 3D BIM Scanning',
    description: 'Integrated drone LiDAR scanning and sub-millimeter BIM clash detection across 100% of our renovation and ground-up builds.'
  },
  {
    year: '2026',
    title: 'The Sovereign Living Benchmark',
    description: 'Over $420M in bespoke estates delivered with a 100% structural warranty record and zero municipal compliance failures.'
  }
];
