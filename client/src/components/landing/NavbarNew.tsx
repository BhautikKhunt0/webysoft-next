import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useScreenSize } from '@/hooks/use-mobile';
import { Menu, X, Shield, Award } from 'lucide-react';

// Professional menu items for navigation
const MENU_ITEMS = [
  { id: 'features', label: 'Solutions' },
  { id: 'how-it-works', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { path: '/portfolio', label: 'Portfolio', isPageLink: true },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  const screenSize = useScreenSize();
  const [location] = useLocation();
  
  const isTabletOrMobile = screenSize === 'mobile' || screenSize === 'tablet';
  const isMobileOnly = screenSize === 'mobile';
  const isPortfolioPage = location === '/portfolio';
  
  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Handle logo click based on current page
  const handleLogoClick = () => {
    if (isPortfolioPage) {
      window.location.href = window.location.origin + '/';
    } else {
      scrollToTop();
    }
  };
  
  // Better navigation handling to sections
  const navigateToSection = (sectionId: string) => {
    if (isPortfolioPage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Professional Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-white font-bold text-xl lg:text-2xl cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Weby<span className="text-blue-400">Soft</span>
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          {!isTabletOrMobile && (
            <div className="hidden lg:flex items-center space-x-8">
              {MENU_ITEMS.map((item, index) => (
                item.isPageLink ? (
                  <Link key={item.path} to={item.path}>
                    <motion.span
                      className="text-gray-300 hover:text-white font-medium transition-colors duration-200 cursor-pointer relative group"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    key={item.id}
                    onClick={() => item.id && navigateToSection(item.id)}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200 cursor-pointer relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                )
              ))}
            </div>
          )}

          {/* Professional CTA Button - Desktop */}
          {!isTabletOrMobile && (
            <motion.button
              onClick={() => navigateToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          {isTabletOrMobile && (
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && isTabletOrMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
            >
              <div className="py-6 space-y-4">
                {MENU_ITEMS.map((item, index) => (
                  item.isPageLink ? (
                    <Link key={item.path} to={item.path}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => item.id && navigateToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium transition-all duration-200"
                    >
                      {item.label}
                    </motion.button>
                  )
                ))}
                
                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: MENU_ITEMS.length * 0.1 }}
                  onClick={() => navigateToSection('contact')}
                  className="w-full mx-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </motion.nav>
  );
}