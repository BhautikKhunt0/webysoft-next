'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useScreenSize } from '@/hooks/use-mobile';

// Menu items for navigation
const MENU_ITEMS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Pricing' },
  { path: '/portfolio', label: 'Portfolio', isPageLink: true },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 100;
  const screenSize = useScreenSize();
  const pathname = usePathname();
  
  const isTabletOrMobile = screenSize === 'mobile' || screenSize === 'tablet';
  const isMobileOnly = screenSize === 'mobile';
  const isPortfolioPage = pathname === '/portfolio';
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleLogoClick = () => {
    if (isPortfolioPage) {
      // Navigate to home page if on portfolio page
      window.location.href = '/';
    } else {
      // Just scroll to top if already on home page
      scrollToTop();
    }
  };
  
  // Better navigation handling to sections
  const navigateToSection = (sectionId: string) => {
    if (isPortfolioPage) {
      // From portfolio page to home page section - use full URL replacement for reliable hash navigation
      const homeUrl = window.location.origin + `/#${sectionId}`;
      window.location.href = homeUrl;
    } else {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPortfolioPage) {
      const contactUrl = window.location.origin + '/#contact';
      window.location.href = contactUrl;
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
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
                <motion.button 
                  onClick={handleLogoClick}
                  className="text-xl font-display font-bold text-glow text-white flex items-center mr-3 md:mr-2 lg:mr-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Weby<span className="text-primary">Soft</span>
                </motion.button>
                
                {/* Navigation - Centered (adapts for tablet) */}
                <div className="hidden md:flex items-center justify-between flex-1">
                  <div className="flex items-center gap-8 ml-12">
                    {MENU_ITEMS.map((item, index) => (
                      item.isPageLink ? (
                        <motion.div key={`page-${item.path}`}>
                          <Link 
                            href={item.path}
                            className={`text-base font-medium text-foreground hover:text-primary py-2 ${index === 0 ? 'pl-0' : ''} md:px-1 lg:px-3 relative whitespace-nowrap`}
                          >
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.label}
                            </motion.span>
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.a
                          key={`section-${item.id}`}
                          href={isPortfolioPage ? `/` : `#${item.id}`}
                          className={`text-base font-medium text-foreground hover:text-primary py-2 ${index === 0 ? 'pl-0' : ''} md:px-1 lg:px-3 relative whitespace-nowrap`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onClick={(e) => {
                            if (isPortfolioPage) {
                              e.preventDefault();
                              window.location.href = `/#${item.id}`;
                            }
                          }}
                        >
                          {item.label}
                        </motion.a>
                      )
                    ))}
                  </div>
                  
                  {/* CTA Button - For tablets and above - Always visible */}
                  <motion.a 
                    href={isPortfolioPage ? "/" : "#contact"}
                    className="bg-primary hover:bg-primary/90 text-white px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full font-medium shadow-lg whitespace-nowrap"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" 
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      if (isPortfolioPage) {
                        e.preventDefault();
                        window.location.href = "/#contact";
                      }
                    }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.button
                  onClick={handleLogoClick}
                  className="text-2xl font-display font-bold text-glow text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Weby<span className="text-primary">Soft</span>
                </motion.button>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center md:space-x-2 lg:space-x-8">
                    {MENU_ITEMS.map((item, index) => (
                      item.isPageLink ? (
                        <motion.div key={`page-${item.path}`}>
                          <Link 
                            href={item.path}
                            className={`text-base font-medium text-foreground hover:text-primary py-2 ${index === 0 ? 'pl-0' : ''} md:px-1 lg:px-3 relative whitespace-nowrap`}
                          >
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.label}
                            </motion.span>
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.a
                          key={`section-${item.id}`}
                          href={isPortfolioPage ? `/` : `#${item.id}`}
                          className={`text-base font-medium text-foreground hover:text-primary py-2 ${index === 0 ? 'pl-0' : ''} md:px-1 lg:px-3 relative whitespace-nowrap`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onClick={(e) => {
                            if (isPortfolioPage) {
                              e.preventDefault();
                              window.location.href = `/#${item.id}`;
                            }
                          }}
                        >
                          {item.label}
                        </motion.a>
                      )
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a 
                    href={isPortfolioPage ? "/" : "#contact"}
                    className="bg-primary hover:bg-primary/90 text-white px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full font-medium shadow-lg ml-3 md:ml-4 lg:ml-6 whitespace-nowrap"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" 
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      if (isPortfolioPage) {
                        e.preventDefault();
                        window.location.href = "/#contact";
                      }
                    }}
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
                item.isPageLink ? (
                  <Link 
                    key={`mobile-${item.path}`}
                    href={item.path}
                    className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    key={`mobile-${item.id}`}
                    href={isPortfolioPage ? `/` : `#${item.id}`}
                    className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (isPortfolioPage) {
                        e.preventDefault();
                        window.location.href = `/#${item.id}`;
                      }
                    }}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <a 
                href={isPortfolioPage ? "/" : "#contact"} 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (isPortfolioPage) {
                    e.preventDefault();
                    window.location.href = "/#contact";
                  }
                }}
              >
                Contact
              </a>
              <div className="pt-4">
                <a 
                  href={isPortfolioPage ? "/" : "#contact"} 
                  className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium text-center block w-full"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (isPortfolioPage) {
                      e.preventDefault();
                      window.location.href = "/#contact";
                    }
                  }}
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
