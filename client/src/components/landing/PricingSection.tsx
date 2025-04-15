import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          One Simple <span className="text-primary text-glow">Plan</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          No complicated tiers. Just one perfect solution for your landing page needs.
        </motion.p>
        
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-10">
          <motion.div 
            className="glass rounded-full p-1 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              className={`py-2 px-6 rounded-full font-medium transition-all ${!isYearly ? 'bg-primary text-white' : 'text-foreground'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`py-2 px-6 rounded-full font-medium transition-all ${isYearly ? 'bg-[#10B981] text-white' : 'text-foreground'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </motion.div>
        </div>
        
        {/* Pricing Cards Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!isYearly ? (
              <PricingCard
                key="monthly"
                type="monthly"
                price="$150"
                period="first month"
                afterPrice="$25"
                afterPeriod="/month after"
                bgColor="primary"
              />
            ) : (
              <PricingCard
                key="yearly"
                type="yearly"
                price="$300"
                period="per year"
                isBestValue={true}
                bgColor="green"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  type: 'monthly' | 'yearly';
  price: string;
  period: string;
  afterPrice?: string;
  afterPeriod?: string;
  isBestValue?: boolean;
  bgColor: 'primary' | 'green';
}

function PricingCard({ type, price, period, afterPrice, afterPeriod, isBestValue, bgColor }: PricingCardProps) {
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass border border-white/10 rounded-2xl overflow-hidden card-3d relative"
    >
      {isBestValue && (
        <div className="absolute top-0 right-0 bg-[#10B981] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          BEST VALUE
        </div>
      )}
      
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Professional Landing Page</h3>
            <p className="text-primary">Perfect for businesses of any size</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-4xl font-display font-bold">
              {price} <span className="text-foreground/60 text-lg">{period}</span>
            </div>
            {afterPrice && (
              <div className="text-xl mt-1">
                <span className="text-[#10B981]">{afterPrice}</span>{afterPeriod}
              </div>
            )}
            {type === 'yearly' && (
              <div className="text-[#10B981] text-sm mt-1">
                Save $150 compared to monthly
              </div>
            )}
          </div>
        </div>
        
        <hr className="border-white/10 mb-8" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <i className="ri-checkbox-circle-fill text-[#10B981] mr-2"></i>
              What's Included
            </h4>
            <ul className="space-y-3">
              <li className="flex">
                <i className="ri-check-line text-[#10B981] mr-3 mt-1"></i>
                <span>Custom designed landing page</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-[#10B981] mr-3 mt-1"></i>
                <span>Mobile responsive design</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-[#10B981] mr-3 mt-1"></i>
                <span>Animations & interactions</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-[#10B981] mr-3 mt-1"></i>
                <span>Conversion optimization</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-[#10B981] mr-3 mt-1"></i>
                <span>SEO-friendly structure</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <i className="ri-award-fill text-accent mr-2"></i>
              Additional Benefits
            </h4>
            <ul className="space-y-3">
              <li className="flex">
                <i className="ri-check-line text-accent mr-3 mt-1"></i>
                <span>Unlimited revisions</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-accent mr-3 mt-1"></i>
                <span>Analytics integration</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-accent mr-3 mt-1"></i>
                <span>CMS integration (optional)</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-accent mr-3 mt-1"></i>
                <span>Form & lead capture setup</span>
              </li>
              <li className="flex">
                <i className="ri-check-line text-accent mr-3 mt-1"></i>
                <span>{type === 'yearly' ? 'Priority technical support' : 'Technical support'}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <a 
          href="#get-started" 
          className={`block w-full ${bgColor === 'primary' ? 'bg-primary' : 'bg-[#10B981]'} hover:bg-opacity-90 text-center text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02]`}
        >
          Get Started Now
        </a>
      </div>
    </motion.div>
  );
}
