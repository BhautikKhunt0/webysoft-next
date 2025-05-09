import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { portfolioItems, PortfolioItemType } from '@/data/portfolio';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import Navbar from '@/components/landing/NavbarNew';
import Footer from '@/components/landing/Footer';
import BackgroundParticles from '@/components/landing/BackgroundParticles';

export default function Portfolio() {
  // State for filtering
  const [selectedType, setSelectedType] = useState<PortfolioItemType | 'All'>('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // Filter items when selection changes
  useEffect(() => {
    let filtered = [...portfolioItems];
    
    // Apply type filter
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }
    
    setFilteredItems(filtered);
  }, [selectedType]);
  
  // Update document metadata with enhanced SEO
  useEffect(() => {
    // Set page title with keywords
    document.title = "WebySoft Portfolio | Professional Website Examples & Case Studies";
    
    // Helper function to create or update meta tags
    const setMetaTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    // Helper function for Open Graph and Twitter tags
    const setSocialMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    // Set primary meta description - expanded and keyword rich
    setMetaTag('description', 
      'Explore WebySoft\'s professional portfolio featuring stunning websites for service businesses, legal firms, local shops, and educational academies. View our web design work and case studies.');
    
    // Set keywords meta tag
    setMetaTag('keywords', 
      'web design portfolio, website examples, professional websites, service business websites, legal websites, local business websites, educational websites, WebySoft case studies');
    
    // Add canonical URL to prevent duplicate content issues
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', window.location.origin + '/portfolio');
    
    // Open Graph tags for better social sharing
    setSocialMetaTag('og:title', 'WebySoft Portfolio | Professional Website Examples');
    setSocialMetaTag('og:description', 'Browse our collection of professionally designed websites across multiple industries.');
    setSocialMetaTag('og:url', window.location.origin + '/portfolio');
    setSocialMetaTag('og:type', 'website');
    setSocialMetaTag('og:image', window.location.origin + '/favicon.png');
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'WebySoft Portfolio | Website Design Examples');
    setMetaTag('twitter:description', 'See our collection of professionally designed websites for various businesses and organizations.');
    setMetaTag('twitter:image', window.location.origin + '/favicon.png');
    
    // Add structured data for better search engine understanding (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'WebySoft Portfolio',
      'description': 'Collection of professional websites designed and developed by WebySoft',
      'url': window.location.origin + '/portfolio',
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': portfolioItems.map((item, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'url': window.location.origin + '/portfolio#' + item.id,
          'name': item.title
        }))
      }
    };
    
    // Add or update the JSON-LD script
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
    // Always scroll to top when portfolio page loads
    window.scrollTo(0, 0);
  }, [selectedType, filteredItems.length]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <BackgroundParticles />
      <Navbar />
      
      {/* Hero Section with semantic header */}
      <header className="pt-32 pb-16 relative">
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
              Explore our creative collection of <strong>service websites</strong>, <strong>legal platforms</strong>, <strong>local shops</strong>, and <strong>educational academies</strong> we've designed with excellence.
            </p>
          </motion.div>
        </div>
      </header>
      
      {/* Portfolio Section with improved semantics and SEO */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters with proper ARIA labels */}
          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">Portfolio filters</h2>
            <PortfolioFilters 
              selectedType={selectedType} 
              onTypeChange={setSelectedType}
            />
          </section>
          
          {/* Empty state with semantic markup */}
          {filteredItems.length === 0 && (
            <motion.section
              aria-live="polite" 
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
                onClick={() => setSelectedType('All')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium"
                aria-label="Reset filters to view all projects"
              >
                Reset Filters
              </button>
            </motion.section>
          )}
          
          {/* Portfolio grid with semantic list structure and count */}
          <section aria-labelledby="portfolio-heading">
            <h2 id="portfolio-heading" className="sr-only">
              Our portfolio of {filteredItems.length} projects
              {selectedType !== 'All' ? ` in ${selectedType}` : ''}
            </h2>
            
            <p className="text-lg mb-8 text-center">
              {filteredItems.length > 0 ? (
                <>
                  Displaying <span className="font-semibold">{filteredItems.length}</span> projects
                  {selectedType !== 'All' ? <> in the <span className="font-semibold">{selectedType}</span> category</> : ''}
                </>
              ) : null}
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none pl-0" role="list">
              {filteredItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PortfolioCard item={item} index={index} />
                </motion.li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}