// Portfolio data file to manage showcase items
export type PortfolioItemType = 'Service' | 'Legal' | 'Local Shop' | 'Academy';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  type: PortfolioItemType;
  imageUrl: string;
  previewLink: string;
  technologies: string[];
  category: string;
  featured: boolean;
}

// Export portfolio data
export const portfolioItems: PortfolioItem[] = [
  {
    id: "service-1",
    title: "Creative Digital Agency",
    description: "Modern service website for a digital agency with interactive portfolio showcase and service offerings.",
    type: "Service",
    imageUrl: "/portfolio/service-1.svg",
    previewLink: "https://example.com/creative-digital",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    category: "Creative",
    featured: true
  },
  {
    id: "legal-1",
    title: "Law Associates",
    description: "Professional legal services website with client portal, attorney profiles, and case studies.",
    type: "Legal",
    imageUrl: "/portfolio/legal.svg",
    previewLink: "https://example.com/law-associates",
    technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    category: "Legal",
    featured: true
  },
  {
    id: "academy-1",
    title: "MindCraft Academy",
    description: "Interactive learning platform with course enrollment, progress tracking, and live webinars.",
    type: "Academy",
    imageUrl: "/portfolio/academy.svg",
    previewLink: "https://example.com/mindcraft-academy",
    technologies: ["React", "TypeScript", "Firebase", "Express"],
    category: "Education",
    featured: false
  },
  {
    id: "local-1",
    title: "Joe's Bakery",
    description: "Local bakery website with online ordering, delivery scheduling, and interactive menu.",
    type: "Local Shop",
    imageUrl: "/portfolio/local-1.svg",
    previewLink: "https://example.com/joes-bakery",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    category: "Food & Beverage",
    featured: true
  },
  {
    id: "service-2",
    title: "Green Gardens Landscaping",
    description: "Service business website with project gallery, client testimonials, and online consultation booking.",
    type: "Service",
    imageUrl: "/portfolio/ecommerce-2.svg",
    previewLink: "https://example.com/green-gardens",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Home & Garden",
    featured: false
  },
  {
    id: "academy-2",
    title: "CodeMaster Institute",
    description: "Online programming school with interactive code editors, student projects, and mentor matching.",
    type: "Academy",
    imageUrl: "/portfolio/academy.svg",
    previewLink: "https://example.com/codemaster",
    technologies: ["React", "Express", "MySQL", "Socket.IO"],
    category: "Technology",
    featured: false
  }
];

// Helper functions to work with portfolio data
export function getPortfolioItemsByType(type: PortfolioItemType): PortfolioItem[] {
  return portfolioItems.filter(item => item.type === type);
}

export function getPortfolioItemsByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter(item => item.category === category);
}

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.id === id);
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return portfolioItems.filter(item => item.featured);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categoriesSet = new Set<string>();
  portfolioItems.forEach(item => categoriesSet.add(item.category));
  return Array.from(categoriesSet);
}

// Get all available types
export function getAllTypes(): PortfolioItemType[] {
  return ["Service", "Legal", "Local Shop", "Academy"];
}