import { motion } from 'framer-motion';

export default function HeroSection() {
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
              href="#get-started" 
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
          
          {/* Floating UI Elements */}
          <motion.div 
            className="absolute -right-10 top-1/3 bg-accent text-white p-3 rounded-lg glass"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <i className="ri-user-line"></i>
              </div>
              <div>
                <div className="text-xs text-white/80">New Signup</div>
                <div className="text-sm font-medium">John from NYC</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -left-12 bottom-1/4 bg-[#10B981] text-white p-3 rounded-lg glass"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <i className="ri-shopping-cart-line"></i>
              </div>
              <div>
                <div className="text-xs text-white/80">New Purchase</div>
                <div className="text-sm font-medium">$150 Plan</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
          <i className="ri-arrow-down-line text-2xl text-primary"></i>
        </motion.div>
      </div>
    </section>
  );
}
