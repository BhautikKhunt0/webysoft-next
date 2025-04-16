import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useScreenSize } from '@/hooks/use-mobile';

// Menu items for navigation
const MENU_ITEMS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 100;
  const screenSize = useScreenSize();
  
  const isTabletOrMobile = screenSize === 'mobile' || screenSize === 'tablet';
  const isMobileOnly = screenSize === 'mobile';
  
  // Close mobile menu on navigation or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <motion.nav
      className="fixed top-0 z-50 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="container mx-auto px-4 relative"
        animate={{ 
          paddingTop: isScrolled ? "0.75rem" : "1.5rem",
          paddingBottom: isScrolled ? "0.75rem" : "1.5rem" 
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1] // custom bezier curve for smooth transition
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isScrolled ? "scrolled" : "top"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {isScrolled ? (
              <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-background/80 backdrop-blur-lg py-3 md:py-3 lg:py-3 px-5 md:px-5 lg:px-8 flex items-center justify-between shadow-lg">
                {/* Logo */}
                <Link href="/">
                  <motion.span 
                    className="text-xl font-display font-bold text-glow text-white flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Weby<span className="text-primary">Soft</span>
                  </motion.span>
                </Link>
                
                {/* Navigation - Centered (adapts for tablet) */}
                <div className="hidden md:flex items-center justify-center gap-8">
                  {MENU_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-base font-medium text-foreground hover:text-primary py-2 whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.a 
                  href="#contact" 
                  className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-full font-medium shadow-lg whitespace-nowrap ml-8"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.a>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                  <motion.span 
                    className="text-2xl font-display font-bold text-glow text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Weby<span className="text-primary">Soft</span>
                  </motion.span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center md:space-x-2 lg:space-x-8">
                    {MENU_ITEMS.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`text-base font-medium text-foreground hover:text-primary py-2 ${index === 0 ? 'pl-0' : ''} md:px-1 lg:px-3 relative whitespace-nowrap`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a 
                    href="#contact" 
                    className="bg-primary hover:bg-primary/90 text-white px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full font-medium shadow-lg ml-3 md:ml-4 lg:ml-6 whitespace-nowrap"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Mobile Menu Button - Only visible on mobile screens */}
        <button 
          className="md:hidden text-white focus:outline-none absolute top-1/2 right-6 transform -translate-y-1/2 z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </motion.div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden p-6 absolute w-full left-0 shadow-lg border-t border-white/10 bg-background/90 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 mt-2">
              {MENU_ITEMS.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium text-center block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}