import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NewsletterForm from './NewsletterForm';
import GlassCard from './GlassCard';

export default function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/70 -z-10"></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <GlassCard 
            className="p-8 md:p-12 border border-white/10 overflow-hidden relative"
            borderGlow="primary"
          >
            {/* Logo and Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            {/* Top Section: Logo and Newsletter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 border-b border-white/10 pb-12">
              <div className="text-center md:text-left">
                <Link href="/" className="inline-block mb-4">
                  <span className="text-3xl font-display font-bold text-glow text-white">
                    Weby<span className="text-primary">Soft</span>
                  </span>
                </Link>
                <p className="text-foreground/70 max-w-md">
                  Transform your ideas into high-converting digital experiences with our premium landing page solutions.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">Stay Updated</h3>
                <div className="w-full md:w-80">
                  <NewsletterForm />
                </div>
              </div>
            </div>
            
            {/* Navigation Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Features</a></li>
                  <li><a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">How It Works</a></li>
                  <li><a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Pricing</a></li>
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#faq" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
                  <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact</a></li>
                  <li><a href="#help" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Help Center</a></li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">About Us</a></li>
                  <li><a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Testimonials</a></li>
                  <li><a href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Portfolio</a></li>
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#privacy" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Terms of Service</a></li>
                  <li><a href="#cookies" className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            {/* Animated Border Divider */}
            <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
            
            {/* Bottom Section with Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-8">
              <p className="text-foreground/60 text-center md:text-left mb-4 md:mb-0">
                © {new Date().getFullYear()} <span className="text-white">WebySoft</span>. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-8">
                {/* Animated Pulsing Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-30"></span>
                  <a href="#contact" className="relative bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-primary/30 inline-block">
                    Get Started
                  </a>
                </motion.div>
                
                <p className="text-foreground/80">
                  Made with 
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-red-500 inline-block mx-1"
                  >
                    ❤️
                  </motion.span> 
                  by our team
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </footer>
  );
}
