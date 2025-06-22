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
    <section id="target-audience" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-secondary/40 -z-10"></div>
      <div className="absolute -left-32 top-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute -right-32 bottom-40 w-96 h-96 bg-accent/15 rounded-full blur-[100px] opacity-70 animate-pulse-slow"></div>
      <div className="absolute left-1/2 top-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] opacity-30 animate-pulse-slow animate-delay-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Section Header with enhanced styling */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-glow relative">
              Perfect
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </span> For
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/70 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Designed for visionaries who understand that exceptional design drives exceptional results
          </motion.p>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </motion.div>
        
        {/* Mobile View - Improved Card Design with Pagination */}
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden">
            <div className="flex flex-col items-center">
              {audiences.map((audience, index) => (
                <motion.div 
                  key={index}
                  className={`w-full max-w-sm mx-auto glass p-8 border border-white/10 rounded-2xl flex flex-col items-center text-center transition-all duration-500 shadow-xl backdrop-blur-md relative
                    ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-24 h-24 ${colorClasses[audience.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mb-8 shadow-lg border border-white/10`}>
                    <i className={`${audience.icon} text-4xl ${colorClasses[audience.color as keyof typeof colorClasses].text}`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-display">{audience.title}</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">{audience.description}</p>
                  
                  {/* Visual indicator at bottom of card */}
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent mt-6"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Mobile Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              <motion.button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-lg flex items-center justify-center border border-white/20 text-foreground hover:bg-primary/30 transition-all hover:scale-110 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-arrow-left-s-line text-2xl"></i>
              </motion.button>
              
              {/* Improved Dots Indicator */}
              <div className="flex space-x-3 justify-center">
                {audiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-10 h-3 bg-primary rounded-full shadow-md shadow-primary/40' 
                        : 'w-3 h-3 bg-foreground/30 rounded-full hover:bg-foreground/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-lg flex items-center justify-center border border-white/20 text-foreground hover:bg-primary/30 transition-all hover:scale-110 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-arrow-right-s-line text-2xl"></i>
              </motion.button>
            </div>
          </div>
          
          {/* Improved swipe instructions */}
          <div className="flex items-center justify-center mt-8 text-sm text-foreground/60 bg-primary/5 py-2 px-4 rounded-full backdrop-blur-sm border border-white/5 shadow-inner">
            <i className="ri-swipe-line mr-2"></i>
            <span>Swipe or tap arrows to explore more audiences</span>
          </div>
        </motion.div>
        
        {/* Desktop View - Enhanced Card Grid Layout */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {audiences.map((audience, index) => (
              <motion.div 
                key={index}
                className="royal-border glass p-8 border border-white/10 rounded-2xl flex flex-col items-center text-center transition-all hover:shadow-2xl hover:shadow-primary/10 duration-500 backdrop-blur-md relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Animated hover accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                
                {/* Icon with enhanced styling */}
                <div className={`w-24 h-24 ${colorClasses[audience.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 border border-white/10`}>
                  <i className={`${audience.icon} text-4xl ${colorClasses[audience.color as keyof typeof colorClasses].text} group-hover:scale-125 transition-transform duration-500`}></i>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 font-display">{audience.title}</h3>
                <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{audience.description}</p>
                
                {/* Animated underline that appears on hover */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 group-hover:w-24 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;