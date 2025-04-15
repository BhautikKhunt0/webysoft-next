import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 100;
  
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
      className={`fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass bg-glow mx-auto max-w-6xl rounded-full my-4 left-1/2 transform -translate-x-1/2 border border-white/10' 
          : 'w-full px-8 py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`max-w-6xl mx-auto ${isScrolled ? 'px-8 py-3' : 'px-4 py-5'} flex items-center justify-center relative`}>
        {/* Logo */}
        <Link href="/" className="flex items-center absolute left-4">
          <span className="text-2xl font-display font-bold text-glow text-white">
            Weby<span className="text-primary">Soft</span>
          </span>
        </Link>
        
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex space-x-10 mx-auto">
          <a href="#features" className="text-base font-medium hover:text-primary transition-colors py-2">Features</a>
          <a href="#how-it-works" className="text-base font-medium hover:text-primary transition-colors py-2">How It Works</a>
          <a href="#pricing" className="text-base font-medium hover:text-primary transition-colors py-2">Pricing</a>
          <a href="#testimonials" className="text-base font-medium hover:text-primary transition-colors py-2">Testimonials</a>
          <a href="#faq" className="text-base font-medium hover:text-primary transition-colors py-2">FAQ</a>
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block absolute right-4">
          <a 
            href="#get-started" 
            className="bg-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none absolute right-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden glass p-6 absolute w-full left-0 shadow-lg border-t border-white/10 bg-background/90 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 mt-2">
              <a 
                href="#features" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="text-base font-medium hover:text-primary px-4 py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <a 
                  href="#get-started" 
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
