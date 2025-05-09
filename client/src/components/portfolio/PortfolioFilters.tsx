import { motion } from 'framer-motion';
import { PortfolioItemType, getAllTypes } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

interface PortfolioFiltersProps {
  selectedType: PortfolioItemType | 'All';
  selectedCategory: string | 'All';
  onTypeChange: (type: PortfolioItemType | 'All') => void;
  onCategoryChange: (category: string | 'All') => void;
}

export default function PortfolioFilters({ 
  selectedType, 
  onTypeChange 
}: PortfolioFiltersProps) {
  const types = ['All', ...getAllTypes()];
  
  return (
    <div className="mb-12">
      <h3 className="text-center text-lg font-medium mb-6 text-foreground/80">Filter by Website Type</h3>
      
      {/* Type filters */}
      <motion.div 
        className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {types.map((type) => (
          <Badge
            key={type}
            variant={selectedType === type ? 'default' : 'outline'}
            className={`cursor-pointer px-4 py-2 text-sm ${
              selectedType === type
                ? 'bg-primary text-white'
                : 'bg-secondary/30 hover:bg-secondary/50'
            }`}
            onClick={() => onTypeChange(type as PortfolioItemType | 'All')}
          >
            {type}
          </Badge>
        ))}
      </motion.div>
    </div>
  );
}