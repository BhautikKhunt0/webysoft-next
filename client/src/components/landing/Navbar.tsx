import { useState, useEffect } from 'react';
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
  
  // Variants for navbar container
  const navContainerVariants = {
    expanded: {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      transition: { 
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    collapsed: {
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      transition: { 
        duration: 0.15,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };
  
  // Variants for navbar
  const navVariants = {
    expanded: {
      borderRadius: "0px",
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    collapsed: {
      borderRadius: "9999px",
      backgroundColor: "rgba(10, 10, 18, 0.8)",
      backdropFilter: "blur(8px)",
      boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.15,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };
  
  // Variants for logo element
  const logoVariants = {
    expanded: {
      fontSize: "1.5rem",
      marginRight: "0px",
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    collapsed: {
      fontSize: "1.25rem",
      marginRight: "1.5rem",
      transition: {
        duration: 0.15,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };
  
  // Variants for menu items container
  const menuContainerVariants = {
    expanded: {
      marginLeft: "0px",
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    collapsed: {
      marginLeft: "3rem",
      transition: {
        duration: 0.15,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };
  
  // Variants for CTA button
  const ctaButtonVariants = {
    expanded: {
      marginLeft: "1.5rem",
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    collapsed: {
      marginLeft: "0rem",
      transition: {
        duration: 0.15,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div 
        className="container mx-auto px-4 relative pointer-events-auto"
        variants={navContainerVariants}
        initial="expanded"
        animate={isScrolled ? "collapsed" : "expanded"}
      >
        <motion.div
          className="mx-auto max-w-6xl flex items-center justify-between border border-white/10"
          variants={navVariants}
          initial="expanded"
          animate={isScrolled ? "collapsed" : "expanded"}
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="expanded"
            animate={isScrolled ? "collapsed" : "expanded"}
            className="py-3 px-5"
          >
            <Link href="/">
              <span className="font-display font-bold text-glow text-white">
                Weby<span className="text-primary">Soft</span>
              </span>
            </Link>
          </motion.div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1">
            <motion.div
              className="flex items-center"
              variants={menuContainerVariants}
              initial="expanded"
              animate={isScrolled ? "collapsed" : "expanded"}
            >
              {MENU_ITEMS.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-base font-medium text-foreground hover:text-primary py-2 px-3 relative whitespace-nowrap transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              variants={ctaButtonVariants}
              initial="expanded"
              animate={isScrolled ? "collapsed" : "expanded"}
              className="py-3 px-5"
            >
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-4 lg:px-6 py-2 rounded-full font-medium shadow-lg whitespace-nowrap transition-all duration-200"
              >
                Get Started
              </a>
            </motion.div>
          </div>
          
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
      </motion.div>
    </div>
  );
}