// Portfolio data file to manage showcase items
export type PortfolioItemType = 'Ecommerce' | 'Service' | 'Firm' | 'Local Shop';

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
    id: "ecom-1",
    title: "Fashion Nova",
    description: "A high-end fashion ecommerce store with advanced filtering and personalized recommendations.",
    type: "Ecommerce",
    imageUrl: "/portfolio/ecommerce-1.jpg",
    previewLink: "https://example.com/fashion-nova",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    category: "Fashion",
    featured: true
  },
  {
    id: "service-1",
    title: "Legal Experts",
    description: "Professional legal services website with client portal and appointment scheduling.",
    type: "Service",
    imageUrl: "/portfolio/service-1.jpg",
    previewLink: "https://example.com/legal-experts",
    technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    category: "Legal",
    featured: true
  },
  {
    id: "firm-1",
    title: "Tech Consultants Inc",
    description: "Corporate website for a technology consulting firm with case studies and service offerings.",
    type: "Firm",
    imageUrl: "/portfolio/firm-1.jpg",
    previewLink: "https://example.com/tech-consultants",
    technologies: ["React", "TypeScript", "Framer Motion", "Express"],
    category: "Technology",
    featured: false
  },
  {
    id: "local-1",
    title: "Joe's Bakery",
    description: "Local bakery website with online ordering and delivery scheduling.",
    type: "Local Shop",
    imageUrl: "/portfolio/local-1.jpg",
    previewLink: "https://example.com/joes-bakery",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    category: "Food & Beverage",
    featured: true
  },
  {
    id: "ecom-2",
    title: "Tech Gadgets Pro",
    description: "Electronics ecommerce platform with product comparisons and reviews.",
    type: "Ecommerce",
    imageUrl: "/portfolio/ecommerce-2.jpg",
    previewLink: "https://example.com/tech-gadgets",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Electronics",
    featured: false
  },
  {
    id: "service-2",
    title: "Wellness Spa",
    description: "Spa and wellness center website with online booking and gift card purchases.",
    type: "Service",
    imageUrl: "/portfolio/service-2.jpg",
    previewLink: "https://example.com/wellness-spa",
    technologies: ["React", "Express", "MySQL", "Tailwind CSS"],
    category: "Health & Wellness",
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
  return ["Ecommerce", "Service", "Firm", "Local Shop"];
}