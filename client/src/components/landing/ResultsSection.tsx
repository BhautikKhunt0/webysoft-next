import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import GlassCard from './GlassCard';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  color: string;
  description: string;
  subText: string;
  duration?: number;
}

function Counter({ end, suffix = "", prefix = "", color, description, subText, duration = 2 }: CounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  const counterControls = useAnimation();
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
      counterControls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, end, duration, counterControls]);
  
  return (
    <GlassCard className="p-8 text-center">
      <div 
        ref={counterRef}
        className={`text-4xl font-display font-bold text-${color} mb-2`}
      >
        {prefix}{count}{suffix}
      </div>
      <p className="text-lg">{description}</p>
      <p className="text-sm text-foreground/60 mt-2">{subText}</p>
    </GlassCard>
  );
}

import { useState } from 'react';

export default function ResultsSection() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow">Results</span> That Speak
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our landing pages are tested and proven to deliver exceptional performance.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Counter 
            end={43}
            prefix="+"
            suffix="%"
            color="primary"
            description="Conversion Increase"
            subText="Average improvement over previous landing pages"
          />
          
          <Counter 
            end={2.1}
            suffix="s"
            color="accent"
            description="Load Time"
            subText="Average initial page load on mobile devices"
          />
          
          <Counter 
            end={98}
            color="[#10B981]"
            description="Lighthouse Score"
            subText="Average performance rating across all metrics"
          />
        </div>
        
        {/* Performance Chart (simplified visualization) */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GlassCard className="p-6">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="font-bold">Performance Comparison</h3>
              <div className="text-sm text-foreground/60">Last 6 months</div>
            </div>
            
            <div className="relative h-64">
              {/* This would be a real chart in production */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/4 flex items-end">
                {/* Chart bars with animation */}
                <motion.div 
                  className="w-1/6 bg-white/20 mx-1"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '30%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-white/20 mx-1"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '40%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-white/20 mx-1"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '35%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-primary mx-1"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '65%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-primary mx-1"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '75%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-primary mx-1"
                  initial={{ height: '0%' }}
                  whileInView={{ height: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>
              </div>
              
              <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-white/20 flex justify-end">
                <span className="text-xs text-foreground/60 -mt-4 mr-2">Industry Average</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xs text-foreground/60 mt-2">
              <span>Before WebySoft</span>
              <span>After WebySoft</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
