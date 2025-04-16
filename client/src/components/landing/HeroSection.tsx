import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block">Turn <span className="text-glow text-primary">Ideas</span> Into</span>
            <span className="block">High-Converting <span className="gradient-text">Experiences</span></span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We build cutting-edge landing pages that don't just look amazing — they convert.
          </motion.p>
          
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="bg-primary hover:bg-opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center"
            >
              <span>Get Started</span>
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </motion.div>
        </div>
        
        {/* 3D Mockup Device */}
        <motion.div 
          className="relative max-w-4xl mx-auto card-3d"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-secondary p-3 border-b border-white/10 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-background/50 rounded-full px-4 py-1 text-xs text-foreground/70">
                www.youramazingsite.com
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Website mockup showing a modern dark theme interface with neon accents" 
              className="w-full h-auto object-cover" 
              loading="eager"
            />
          </div>
        </motion.div>
        
        {/* Scroll Indicator - Now Clickable */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => scrollToSection('problem-solution')}
          role="button"
          aria-label="Scroll to explore content"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToSection('problem-solution');
            }
          }}
        >
          <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
          <i className="ri-arrow-down-line text-2xl text-primary"></i>
        </motion.div>
      </div>
    </section>
  );
}
