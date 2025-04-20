import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
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
  const lastScrollDirectionRef = useRef('none');
  
  const isTabletOrMobile = screenSize === 'mobile' || screenSize === 'tablet';
  const isMobileOnly = screenSize === 'mobile';
  
  // Smooth transition settings based on scroll direction
  const transitionProps = {
    // When scrolling down (showing compact navbar), use faster animation
    down: {
      type: "tween",
      ease: "easeOut",
      duration: 0.15
    },
    // When scrolling up (showing full navbar), use slightly slower animation
    up: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3
    }
  };
  
  // Determine transition to use based on scroll direction
  useEffect(() => {
    if (isScrolled) {
      lastScrollDirectionRef.current = 'down';
    } else {
      lastScrollDirectionRef.current = 'up';
    }
  }, [isScrolled]);
  
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
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4 relative pointer-events-auto">
        <motion.div
          animate={{
            paddingTop: isScrolled ? "0.75rem" : "1.5rem",
            paddingBottom: isScrolled ? "0.75rem" : "1.5rem"
          }}
          transition={isScrolled ? transitionProps.down : transitionProps.up}
        >
          <motion.div
            className={isScrolled 
              ? "mx-auto max-w-6xl rounded-full border border-white/10 bg-background/80 backdrop-blur-lg py-3 md:py-3 lg:py-3 px-5 md:px-5 lg:px-8 flex items-center justify-between shadow-lg" 
              : "flex items-center justify-between"
            }
            transition={isScrolled ? transitionProps.down : transitionProps.up}
          >
            {/* Logo */}
            <Link href="/">
              <span className={isScrolled 
                ? "text-xl font-display font-bold text-glow text-white flex items-center mr-3 md:mr-2 lg:mr-6"
                : "text-2xl font-display font-bold text-glow text-white"
              }>
                Weby<span className="text-primary">Soft</span>
              </span>
            </Link>
            
            {/* Navigation */}
            <div className={isScrolled 
              ? "hidden md:flex items-center justify-between flex-1" 
              : "hidden md:flex items-center justify-between"
            }>
              <div className={isScrolled 
                ? "flex items-center gap-8 ml-12" 
                : "flex items-center md:space-x-2 lg:space-x-8"
              }>
                {MENU_ITEMS.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-base font-medium text-foreground hover:text-primary py-2 ${index === 0 ? 'pl-0' : ''} md:px-1 lg:px-3 relative whitespace-nowrap transition-all duration-200`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* CTA Button */}
              <a 
                href="#contact" 
                className={`bg-primary hover:bg-primary/90 text-white px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full font-medium shadow-lg whitespace-nowrap transition-all duration-200 ${isScrolled ? '' : 'ml-3 md:ml-4 lg:ml-6'}`}
              >
                Get Started
              </a>
            </div>
          </motion.div>
          
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
        {mobileMenuOpen && (
          <div className="md:hidden p-6 absolute w-full left-0 shadow-lg border-t border-white/10 bg-background/90 backdrop-blur-lg">
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
          </div>
        )}
      </div>
    </div>
  );
}