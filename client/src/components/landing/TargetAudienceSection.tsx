import { useRef } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

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

// A mapping for the color classes
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

export default function TargetAudienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow">Perfect</span> For
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Designed for professionals who value both aesthetics and results.
        </motion.p>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-8"
          >
            <div className="flex space-x-6 min-w-max px-4">
              {audiences.map((audience, index) => (
                <motion.div 
                  key={index}
                  className="w-[280px] glass card-3d p-8 border border-white/10 flex flex-col items-center text-center"
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
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <div className="w-16 h-full bg-gradient-to-r from-secondary/90 to-transparent"></div>
            <div className="w-16 h-full bg-gradient-to-l from-secondary/90 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
