import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();
  const [showButton, setShowButton] = useState(false);
  
  // Show button after scrolling down 300px
  useEffect(() => {
    setShowButton(scrollY > 300);
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
          className="fixed z-50 bottom-6 right-6 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <motion.div
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