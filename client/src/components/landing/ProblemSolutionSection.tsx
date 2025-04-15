import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Your Website <span className="text-primary text-glow">Might Be</span> the Problem
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Problem Column */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-red-500/10 blur-2xl"></div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center text-red-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <i className="ri-close-circle-line text-3xl mr-3"></i>
              Common Website Issues
            </motion.h3>
            
            <div className="space-y-6">
              <GlassCard borderGlow="red" delay={0.1}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">Slow &amp; Frustrating</h4>
                  <p className="text-foreground/70">Visitors leave after waiting more than 3 seconds for your page to load.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="red" delay={0.2}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">Boring &amp; Generic</h4>
                  <p className="text-foreground/70">Templated websites that look like everyone else's fail to make an impression.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="red" delay={0.3}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">No Conversions</h4>
                  <p className="text-foreground/70">Beautiful but ineffective designs that don't actually drive business results.</p>
                </div>
              </GlassCard>
            </div>
          </div>
          
          {/* Solution Column */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#10B981]/10 blur-2xl"></div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center text-[#10B981]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <i className="ri-check-double-line text-3xl mr-3"></i>
              WebySoft Solutions
            </motion.h3>
            
            <div className="space-y-6">
              <GlassCard borderGlow="green" delay={0.1}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">Lightning Fast</h4>
                  <p className="text-foreground/70">Optimized for speed with 90+ PageSpeed scores and sub-2 second load times.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="green" delay={0.2}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">Beautiful &amp; Unique</h4>
                  <p className="text-foreground/70">Custom animations and interactions that create memorable experiences.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="green" delay={0.3}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">Designed to Sell</h4>
                  <p className="text-foreground/70">Strategic design patterns that guide visitors toward conversion actions.</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
