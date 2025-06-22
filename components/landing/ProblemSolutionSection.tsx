import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-20 bg-background/80">
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
            
            <div className="space-y-4">
              <GlassCard borderGlow="red" delay={0.1}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-loader-line text-red-400 mr-2"></i>
                    Slow &amp; Frustrating
                  </h4>
                  <p className="text-foreground/70">Visitors abandon your site after waiting just 3 seconds for pages to load, costing you valuable leads.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="red" delay={0.2}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-file-copy-line text-red-400 mr-2"></i>
                    Boring &amp; Generic
                  </h4>
                  <p className="text-foreground/70">Cookie-cutter templates make your business forgettable and fail to build brand recognition.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="red" delay={0.3}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-close-circle-line text-red-400 mr-2"></i>
                    Poor Conversion Rates
                  </h4>
                  <p className="text-foreground/70">Visually appealing but poorly structured sites that don't guide visitors toward taking action.</p>
                </div>
              </GlassCard>

              <GlassCard borderGlow="red" delay={0.4}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-smartphone-line text-red-400 mr-2"></i>
                    Not Mobile-Friendly
                  </h4>
                  <p className="text-foreground/70">Broken layouts on phones and tablets alienate over 60% of your potential customers.</p>
                </div>
              </GlassCard>

              <GlassCard borderGlow="red" delay={0.5}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-ghost-line text-red-400 mr-2"></i>
                    Invisible to Search Engines
                  </h4>
                  <p className="text-foreground/70">Poor SEO practices keep your site buried on page 10 where no one will ever find it.</p>
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
            
            <div className="space-y-4">
              <GlassCard borderGlow="green" delay={0.1}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-rocket-line text-[#10B981] mr-2"></i>
                    Lightning Fast
                  </h4>
                  <p className="text-foreground/70">Optimized code and advanced caching systems that achieve 90+ PageSpeed scores and sub-1 second load times.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="green" delay={0.2}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-star-line text-[#10B981] mr-2"></i>
                    Beautiful &amp; Unique
                  </h4>
                  <p className="text-foreground/70">Custom-designed interfaces with subtle animations that create memorable brand experiences.</p>
                </div>
              </GlassCard>
              
              <GlassCard borderGlow="green" delay={0.3}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-award-line text-[#10B981] mr-2"></i>
                    Conversion-Optimized
                  </h4>
                  <p className="text-foreground/70">Strategic user journey mapping and psychology-driven design patterns that boost conversion rates by 40-130%.</p>
                </div>
              </GlassCard>

              <GlassCard borderGlow="green" delay={0.4}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-device-line text-[#10B981] mr-2"></i>
                    Device-Perfect
                  </h4>
                  <p className="text-foreground/70">Responsive layouts that work flawlessly on any device, from desktop to mobile and everything in between.</p>
                </div>
              </GlassCard>

              <GlassCard borderGlow="green" delay={0.5}>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white flex items-center">
                    <i className="ri-search-line text-[#10B981] mr-2"></i>
                    Search Engine Optimized
                  </h4>
                  <p className="text-foreground/70">Built with SEO best practices to help your business get found organically by your ideal customers.</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
