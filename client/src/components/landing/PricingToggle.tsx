import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);
  
  // Color mapping
  const primaryColor = {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/30',
    button: 'bg-primary hover:bg-primary/90',
    highlight: 'from-primary/20 to-transparent'
  };
  
  // Features list for premium plan
  const features = [
    { title: 'Unlimited landing pages', included: true },
    { title: 'Mobile responsive design', included: true },
    { title: 'Advanced animations and effects', included: true },
    { title: 'Contact forms with validation', included: true },
    { title: 'Analytics integration', included: true },
    { title: 'SEO optimization', included: true },
    { title: 'A/B testing capabilities', included: true },
    { title: 'Priority customer support', included: true },
    { title: 'Custom integrations', included: true },
    { title: 'Monthly performance reports', included: true }
  ];
  
  return (
    <div>
      {/* Pricing Toggle */}
      <div className="flex flex-col items-center mb-12">
        <div className="text-xl font-medium mb-6">Choose your billing plan:</div>
        <motion.div 
          className="glass rounded-full p-1 inline-flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className={`py-3 px-8 rounded-full font-medium transition-all ${!isYearly ? 'bg-primary text-white shadow-lg' : 'text-foreground'}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={`py-3 px-8 rounded-full font-medium transition-all flex items-center ${isYearly ? 'bg-[#10B981] text-white shadow-lg' : 'text-foreground'}`}
            onClick={() => setIsYearly(true)}
          >
            <span>Yearly</span>
            {isYearly && (
              <span className="ml-2 bg-white/20 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                <i className="ri-money-dollar-circle-line mr-1"></i>
                Save Big
              </span>
            )}
          </button>
        </motion.div>
      </div>
      
      {/* Single Premium Plan Card */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <GlassCard 
            className="flex flex-col h-full w-full relative overflow-hidden border-2 border-primary"
            is3D={true}
            borderGlow="primary"
          >
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg z-10">
              PREMIUM PLAN
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent -z-0"></div>
            
            <div className="p-8 flex-grow relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  WebySoft Premium
                </div>
                
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold">
                    {isYearly ? '$299' : '$149'}
                  </span>
                  <span className="text-foreground/60 ml-2">
                    {isYearly ? '/year' : ' for first month'}
                  </span>
                </div>
                
                {!isYearly && (
                  <div className="text-lg text-primary">
                    $20/month after first month
                  </div>
                )}
                
                {isYearly && (
                  <div className="text-lg text-[#10B981]">
                    Save over 50% compared to monthly plan
                  </div>
                )}
              </div>
              
              <p className="text-foreground/70 mb-8 text-center text-lg max-w-2xl mx-auto">
                Get everything you need to create high-converting landing pages that drive business growth
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <i className={`ri-checkbox-circle-fill text-primary mt-0.5 mr-3 text-lg`}></i>
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 pt-0 relative z-10">
              <button 
                className="w-full rounded-lg py-4 px-4 font-medium text-white transition transform hover:scale-[1.02] bg-primary hover:bg-primary/90 text-lg"
              >
                Get Started Now
              </button>
              <p className="text-center text-sm mt-4 text-foreground/60">
                No credit card required. Start your journey today.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}