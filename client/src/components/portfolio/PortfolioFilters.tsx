import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioItemType, getAllCategories, getAllTypes } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PortfolioFiltersProps {
  selectedType: PortfolioItemType | 'All';
  selectedCategory: string | 'All';
  onTypeChange: (type: PortfolioItemType | 'All') => void;
  onCategoryChange: (category: string | 'All') => void;
}

export default function PortfolioFilters({ 
  selectedType, 
  selectedCategory, 
  onTypeChange, 
  onCategoryChange 
}: PortfolioFiltersProps) {
  const types = ['All', ...getAllTypes()];
  const categories = ['All', ...getAllCategories()];
  
  // State for the active filter tab
  const [activeTab, setActiveTab] = useState<'type' | 'category'>('type');
  
  return (
    <div className="mb-12">
      {/* Filter tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-background/50 backdrop-blur-md border border-white/10 rounded-full p-1">
          <button
            onClick={() => setActiveTab('type')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'type' 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Website Type
          </button>
          <button
            onClick={() => setActiveTab('category')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'category' 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Category
          </button>
        </div>
      </div>
      
      {/* Type filters */}
      <motion.div 
        className={`grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 mb-8 ${
          activeTab === 'type' ? 'block' : 'hidden'
        }`}
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
      
      {/* Category filters */}
      <motion.div 
        className={`grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 ${
          activeTab === 'category' ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`cursor-pointer px-4 py-2 text-sm ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-secondary/30 hover:bg-secondary/50'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </motion.div>
    </div>
  );
}