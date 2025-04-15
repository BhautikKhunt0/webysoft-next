import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-glow text-white">
                Weby<span className="text-primary">Soft</span>
              </span>
            </Link>
            <p className="text-foreground/60 mb-6">
              Creating high-converting landing pages that look amazing and deliver results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Dribbble"
              >
                <i className="ri-dribbble-line"></i>
              </a>
            </div>
          </motion.div>
          
          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-foreground/60 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-foreground/60 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-foreground/60 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-foreground/60 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-foreground/60 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </motion.div>
          
          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>
          
          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6">Stay Inspired</h3>
            <p className="text-foreground/60 mb-4">Get weekly design tips and inspiration in your inbox.</p>
            <NewsletterForm />
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-foreground/60">
            Made with <span className="text-red-500">❤️</span> by WebySoft © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
