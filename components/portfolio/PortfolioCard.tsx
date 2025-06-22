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
  
  // Create SEO-friendly image alt text
  const imageAlt = `${item.title} - ${item.type} website designed by WebySoft for ${item.category} industry`;
  
  // Create structured data microdata attributes
  const itemPropId = `portfolio-item-${item.id}`;
  
  return (
    <GlassCard 
      className="h-full" 
      animate={true} 
      delay={delay} 
      is3D={true}
      borderGlow="primary"
    >
      <article 
        className="flex flex-col h-full"
        itemScope 
        itemType="https://schema.org/CreativeWork"
        id={itemPropId}
      >
        {/* Portfolio Image with improved accessibility */}
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          <img 
            src={item.imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=WebySoft+Project';
            }}
            itemProp="image"
            loading="lazy"
            width="600"
            height="400"
          />
          
          {/* Type badge with microdata */}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-sm border border-white/10"
            itemProp="applicationCategory"
          >
            {item.type}
          </Badge>
        </div>
        
        {/* Content with microdata */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2" itemProp="name">{item.title}</h3>
          
          <p className="text-foreground/70 mb-4 line-clamp-3 flex-grow" itemProp="description">
            {item.description}
          </p>
          
          {/* Categories with microdata */}
          <div className="mb-4">
            <Badge 
              variant="outline" 
              className="bg-secondary/30"
              itemProp="about"
            >
              {item.category}
            </Badge>
            
            {/* Technologies as keywords (hidden for SEO) */}
            <meta itemProp="keywords" content={item.technologies.join(', ')} />
          </div>
          
          {/* Tech stack badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {item.technologies.slice(0, 3).map((tech, i) => (
              <Badge 
                key={`tech-${i}`} 
                variant="secondary" 
                className="bg-primary/10 text-xs"
              >
                {tech}
              </Badge>
            ))}
            {item.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{item.technologies.length - 3} more
              </Badge>
            )}
          </div>
          
          {/* Actions with microdata */}
          <div className="flex gap-2 mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group"
              asChild
            >
              <a 
                href={item.previewLink} 
                target="_blank" 
                rel="noreferrer noopener"
                itemProp="url"
                aria-label={`View ${item.title} website preview`}
              >
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
          
          {/* Hidden SEO metadata */}
          <meta itemProp="dateCreated" content={new Date().getFullYear().toString()} />
          <meta itemProp="creator" content="WebySoft" />
        </div>
      </article>
    </GlassCard>
  );
}