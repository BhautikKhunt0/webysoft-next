import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
          </motion.div>
          
          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 grid grid-cols-2">
              <li><a href="#features" className="text-foreground/60 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-foreground/60 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-foreground/60 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-foreground/60 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-foreground/60 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-foreground/60 hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </motion.div>
          
          {/* Newsletter Column - Full Width */}
          <motion.div
            className="md:col-span-2 mt-8 bg-secondary/40 p-8 rounded-xl glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-3 text-center">Stay Inspired</h3>
            <p className="text-foreground/60 mb-4 text-center">Get weekly design tips and inspiration in your inbox.</p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
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
