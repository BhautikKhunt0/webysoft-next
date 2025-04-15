import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Data for audience cards
const audiences = [
  {
    icon: "ri-rocket-line",
    color: "primary",
    title: "Startup Founders",
    description: "Launch your MVP with a high-converting landing page that captures leads from day one."
  },
  {
    icon: "ri-building-4-line",
    color: "accent",
    title: "Agencies",
    description: "Deliver premium web experiences to your clients without the development overhead."
  },
  {
    icon: "ri-cloud-line",
    color: "green",
    title: "SaaS Companies",
    description: "Convert free trial users with product pages that highlight your unique value proposition."
  },
  {
    icon: "ri-user-star-line",
    color: "cyan",
    title: "Creators & Influencers",
    description: "Build your personal brand with pages that showcase your content and grow your audience."
  },
  {
    icon: "ri-megaphone-line",
    color: "primary",
    title: "Marketers",
    description: "Launch campaigns with landing pages designed to maximize your advertising ROI."
  }
];

// Color mappings for icons and backgrounds
const colorClasses = {
  primary: {
    bg: "bg-primary/20",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/20",
    text: "text-accent",
  },
  cyan: {
    bg: "bg-[#06B6D4]/20",
    text: "text-[#06B6D4]",
  },
  green: {
    bg: "bg-[#10B981]/20",
    text: "text-[#10B981]",
  }
};

const TargetAudienceSection: React.FC = () => {
  // For desktop horizontal scrolling
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // For mobile carousel
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // Navigation functions for mobile carousel
  const nextSlide = (): void => {
    setActiveIndex((prev) => (prev === audiences.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = (): void => {
    setActiveIndex((prev) => (prev === 0 ? audiences.length - 1 : prev - 1));
  };
  
  // Auto-scroll for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-secondary/50 -z-10"></div>
      <div className="absolute -left-20 top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow">Perfect</span> For
        </motion.h2>
        
        {/* Section Description */}
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-10 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Designed for professionals who value both aesthetics and results.
        </motion.p>
        
        {/* Mobile View - Vertical Cards with Pagination */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            {/* Mobile Carousel */}
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {audiences.map((audience, index) => (
                <div 
                  key={index}
                  className={`w-full max-w-sm mx-auto glass p-8 border border-white/10 rounded-xl flex flex-col items-center text-center transition-all duration-500 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                >
                  <div className={`w-20 h-20 ${colorClasses[audience.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mb-6`}>
                    <i className={`${audience.icon} text-4xl ${colorClasses[audience.color as keyof typeof colorClasses].text}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                  <p className="text-foreground/70">{audience.description}</p>
                </div>
              ))}
            </motion.div>
            
            {/* Mobile Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-white/10 text-foreground hover:bg-primary/20 transition-colors"
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2 justify-center">
                {audiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-6' : 'bg-foreground/30'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-white/10 text-foreground hover:bg-primary/20 transition-colors"
              >
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop View - Horizontal Scroll */}
        <div className="hidden md:block relative">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-8"
          >
            <div className="flex space-x-6 min-w-max px-4">
              {audiences.map((audience, index) => (
                <motion.div 
                  key={index}
                  className="w-[280px] glass p-8 border border-white/10 rounded-xl flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/5 duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className={`w-20 h-20 ${colorClasses[audience.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mb-6`}>
                    <i className={`${audience.icon} text-4xl ${colorClasses[audience.color as keyof typeof colorClasses].text}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                  <p className="text-foreground/70">{audience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <div className="w-16 h-full bg-gradient-to-r from-secondary/90 to-transparent"></div>
            <div className="w-16 h-full bg-gradient-to-l from-secondary/90 to-transparent"></div>
          </div>
        </div>
        
        {/* Swipe Instructions for Mobile */}
        <div className="flex items-center justify-center mt-6 text-sm text-foreground/50 md:hidden">
          <i className="ri-swipe-line mr-2"></i>
          <span>Swipe or tap arrows to navigate</span>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
