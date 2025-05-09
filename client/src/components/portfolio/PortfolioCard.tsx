import { motion } from 'framer-motion';
import { PortfolioItem } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Eye } from 'lucide-react';
import GlassCard from '@/components/landing/GlassCard';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  const delay = index * 0.1; // Stagger animation
  
  return (
    <GlassCard 
      className="h-full" 
      animate={true} 
      delay={delay} 
      is3D={true}
      borderGlow="primary"
    >
      <div className="flex flex-col h-full">
        {/* Portfolio Image */}
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          <img 
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=WebySoft+Project';
            }}
          />
          
          {/* Type badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-sm border border-white/10"
          >
            {item.type}
          </Badge>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          
          <p className="text-foreground/70 mb-4 line-clamp-3 flex-grow">
            {item.description}
          </p>
          
          {/* Categories */}
          <div className="mb-4">
            <Badge variant="outline" className="bg-secondary/30">
              {item.category}
            </Badge>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {item.technologies.map((tech, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="text-xs bg-secondary/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group"
              asChild
            >
              <a href={item.previewLink} target="_blank" rel="noreferrer noopener">
                <Eye className="mr-1 h-4 w-4" />
                Preview
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  className="inline-block"
                >
                  <ArrowUpRight className="ml-1 h-3 w-3 inline" />
                </motion.span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}