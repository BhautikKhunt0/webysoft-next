import { motion } from 'framer-motion';
import PricingToggle from './PricingToggle';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background/90 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-50 -z-5"></div>
      <div className="absolute bottom-40 right-[10%] w-64 h-64 rounded-full bg-[#10B981]/10 blur-3xl opacity-50 -z-5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            PRICING
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Simple, Transparent <span className="text-primary text-glow">Pricing</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            No complicated tiers. Just one perfect solution for your landing page needs.
          </p>
        </motion.div>
        
        <PricingToggle />
        
        {/* Additional upsell features */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
            <p className="text-foreground/70">Get your landing page delivered in as little as 7 days from approval.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
            <p className="text-foreground/70">Not happy with the design? We'll revise until you're completely satisfied.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-[#10B981]/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
            <p className="text-foreground/70">Get expert technical support for your landing page as long as you need it.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
