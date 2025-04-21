import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const wavingRef = useRef<HTMLDivElement>(null);
  
  // Show button after scrolling down 300px
  useEffect(() => {
    setShowButton(scrollY > 300);
    
    // Calculate scroll progress percentage for filling animation
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / documentHeight, 1);
    setScrollProgress(progress);
  }, [scrollY]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          className="fixed z-50 bottom-6 right-6 bg-background text-white rounded-full p-3 shadow-lg hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary/30 overflow-hidden"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Water filling effect background based on scroll progress */}
          <div 
            className="absolute inset-0 bg-primary rounded-full"
            style={{ 
              clipPath: `inset(${100 - scrollProgress * 100}% 0 0 0)`,
              transition: 'clip-path 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Animated water surface effect */}
            <div 
              ref={wavingRef}
              className="absolute top-0 inset-x-0 h-2 bg-primary/30 animate-water-wave"
              style={{
                borderRadius: '50%',
              }}
            />
          </div>
          
          <motion.div
            className="relative z-10"
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          >
            <ArrowUp size={24} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}