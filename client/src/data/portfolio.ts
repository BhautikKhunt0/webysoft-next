// Portfolio data file to manage showcase items
export type PortfolioItemType = "Service" | "Legal" | "Local Shop" | "Academy";

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

// Import image assets
import hrWebsiteImg from '@/assets/hr_website.png';
import accountantFirmImg from '@/assets/accountant_firm.png';
import boxingImg from '@/assets/boxing.png';
import carRepairingImg from '@/assets/car_repairing.png';
import ecommerceImg from '@/assets/ecommerce.png';
import plumberImg from '@/assets/plumber.png';
import restaurantImg from '@/assets/restaurant.png';
import salonImg from '@/assets/salon.png';

export const portfolioItems: PortfolioItem[] = [
  {
    id: "service-1",
    title: "HR Consultancy",
    description:
      "Modern service website for an HR consultancy with interactive service offerings and client resources.",
    type: "Service",
    imageUrl: hrWebsiteImg,
    previewLink: "https://dxjt0ezclqf15.cloudfront.net/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    category: "Creative",
    featured: true,
  },
  {
    id: "legal-1",
    title: "Accountant Firm",
    description:
      "Professional accounting services website with client portal, expert profiles, and financial resources.",
    type: "Legal",
    imageUrl: accountantFirmImg,
    previewLink: "https://d3j2bskdzfrr6y.cloudfront.net/",
    technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    category: "Legal",
    featured: true,
  },
  {
    id: "academy-1",
    title: "Boxing Academy",
    description:
      "Interactive fitness platform with class scheduling, progress tracking, and membership management.",
    type: "Academy",
    imageUrl: boxingImg,
    previewLink: "https://db24377y2z47t.cloudfront.net/",
    technologies: ["React", "TypeScript", "Firebase", "Express"],
    category: "Education",
    featured: false,
  },
  {
    id: "local-1",
    title: "Restaurant Website",
    description:
      "Local restaurant website with online ordering, reservation system, and interactive menu.",
    type: "Local Shop",
    imageUrl: restaurantImg,
    previewLink: "https://example.com/restaurant",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    category: "Food & Beverage",
    featured: true,
  },
  {
    id: "service-2",
    title: "Car Repair Service",
    description:
      "Auto repair service website with appointment booking, service catalog, and maintenance tips.",
    type: "Service",
    imageUrl: carRepairingImg,
    previewLink: "https://dgsot2zg648uu.cloudfront.net/",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Automotive",
    featured: false,
  },
  {
    id: "academy-2",
    title: "Beauty Salon",
    description:
      "Full-service beauty salon website with stylists profiles, service offerings, and online booking.",
    type: "Local Shop",
    imageUrl: salonImg,
    previewLink: "https://example.com/salon",
    technologies: ["React", "Express", "MySQL", "Socket.IO"],
    category: "Beauty",
    featured: false,
  },
  {
    id: "service-3",
    title: "Plumbing Service",
    description:
      "Professional plumbing service website with emergency request form, service areas, and testimonials.",
    type: "Service",
    imageUrl: plumberImg,
    previewLink: "https://example.com/plumbing",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "Home Services",
    featured: false,
  },
  {
    id: "ecommerce-1",
    title: "Fashion Store",
    description:
      "Modern e-commerce platform with product catalog, secure checkout, and customer reviews.",
    type: "Local Shop",
    imageUrl: ecommerceImg,
    previewLink: "https://example.com/fashion-store",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "Retail",
    featured: true,
  },
];

// Helper functions to work with portfolio data
export function getPortfolioItemsByType(
  type: PortfolioItemType,
): PortfolioItem[] {
  return portfolioItems.filter((item) => item.type === type);
}

export function getPortfolioItemsByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categoriesSet = new Set<string>();
  portfolioItems.forEach((item) => categoriesSet.add(item.category));
  return Array.from(categoriesSet);
}

// Get all available types
export function getAllTypes(): PortfolioItemType[] {
  return ["Service", "Legal", "Local Shop", "Academy"];
}
