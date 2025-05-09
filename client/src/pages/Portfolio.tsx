import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { portfolioItems, PortfolioItemType } from '@/data/portfolio';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import BackgroundParticles from '@/components/landing/BackgroundParticles';

export default function Portfolio() {
  // State for filtering
  const [selectedType, setSelectedType] = useState<PortfolioItemType | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // Filter items when selection changes
  useEffect(() => {
    let filtered = [...portfolioItems];
    
    // Apply type filter
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    setFilteredItems(filtered);
  }, [selectedType, selectedCategory]);
  
  // Update document metadata
  useEffect(() => {
    document.title = "WebySoft Portfolio - Our Latest Projects";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Browse WebySoft\'s diverse portfolio of websites across service businesses, legal websites, local shops, and educational academies.');
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <BackgroundParticles />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50 -z-10"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-primary text-glow">Portfolio</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Explore our creative collection of service websites, legal platforms, local shops, and educational academies we've designed with excellence.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <PortfolioFilters 
            selectedType={selectedType} 
            selectedCategory={selectedCategory}
            onTypeChange={setSelectedType}
            onCategoryChange={setSelectedCategory}
          />
          
          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-foreground/70 mb-6">
                No projects match your current filter selection. Try adjusting your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedType('All');
                  setSelectedCategory('All');
                }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
          
          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/30 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Build Your Next <span className="text-primary text-glow">Digital Success</span>?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Get in touch with us today to discuss how we can help you create a stunning website that engages your audience and drives results.
            </p>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium shadow-lg inline-block"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}