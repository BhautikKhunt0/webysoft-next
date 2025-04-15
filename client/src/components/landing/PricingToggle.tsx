import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  savings: string;
  features: {
    title: string;
    included: boolean;
  }[];
  highlighted?: boolean;
  color: 'primary' | 'accent' | 'green';
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started',
    monthlyPrice: '$99',
    yearlyPrice: '$990',
    savings: 'Save $198 yearly',
    color: 'accent',
    features: [
      { title: 'Single landing page', included: true },
      { title: 'Mobile responsive', included: true },
      { title: 'Basic animations', included: true },
      { title: 'Contact form', included: true },
      { title: 'Analytics integration', included: true },
      { title: 'SEO optimization', included: false },
      { title: 'A/B testing', included: false },
      { title: 'Custom integrations', included: false },
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies with higher conversion needs',
    monthlyPrice: '$199',
    yearlyPrice: '$1,990',
    savings: 'Save $398 yearly',
    highlighted: true,
    color: 'primary',
    features: [
      { title: 'Up to 3 landing pages', included: true },
      { title: 'Mobile responsive', included: true },
      { title: 'Advanced animations', included: true },
      { title: 'Contact form', included: true },
      { title: 'Analytics integration', included: true },
      { title: 'SEO optimization', included: true },
      { title: 'A/B testing', included: true },
      { title: 'Custom integrations', included: false },
    ]
  },
  {
    name: 'Enterprise',
    description: 'For organizations needing comprehensive solutions',
    monthlyPrice: '$349',
    yearlyPrice: '$3,490',
    savings: 'Save $698 yearly',
    color: 'green',
    features: [
      { title: 'Unlimited landing pages', included: true },
      { title: 'Mobile responsive', included: true },
      { title: 'Advanced animations', included: true },
      { title: 'Contact form', included: true },
      { title: 'Analytics integration', included: true },
      { title: 'SEO optimization', included: true },
      { title: 'A/B testing', included: true },
      { title: 'Custom integrations', included: true },
    ]
  }
];

// Color mapping
const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/30',
    button: 'bg-primary hover:bg-primary/90',
    highlight: 'from-primary/20 to-transparent'
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'border-accent/30',
    button: 'bg-accent hover:bg-accent/90',
    highlight: 'from-accent/20 to-transparent'
  },
  green: {
    bg: 'bg-[#10B981]/10',
    text: 'text-[#10B981]',
    border: 'border-[#10B981]/30',
    button: 'bg-[#10B981] hover:bg-[#10B981]/90',
    highlight: 'from-[#10B981]/20 to-transparent'
  }
};

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);
  
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
                Save 20%
              </span>
            )}
          </button>
        </motion.div>
      </div>
      
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex"
          >
            <GlassCard 
              className={`flex flex-col h-full w-full relative overflow-hidden ${plan.highlighted ? 'border-2 border-primary' : 'border border-white/10'}`}
              is3D={plan.highlighted}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}
              
              {plan.highlighted && (
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${colorMap[plan.color].highlight} -z-0`}></div>
              )}
              
              <div className="p-8 flex-grow relative z-10">
                <div className={`inline-block ${colorMap[plan.color].bg} ${colorMap[plan.color].text} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                  {plan.name}
                </div>
                
                <div className="mb-6">
                  <div className="flex items-end mb-2">
                    <span className="text-4xl font-bold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-foreground/60 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  
                  {isYearly && (
                    <div className={`text-sm ${colorMap[plan.color].text}`}>
                      {plan.savings}
                    </div>
                  )}
                </div>
                
                <p className="text-foreground/70 mb-8">
                  {plan.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      {feature.included ? (
                        <i className={`ri-checkbox-circle-fill ${colorMap[plan.color].text} mt-0.5 mr-3 text-lg`}></i>
                      ) : (
                        <i className="ri-close-circle-line text-gray-500 mt-0.5 mr-3 text-lg"></i>
                      )}
                      <span className={feature.included ? '' : 'text-foreground/50'}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 pt-0 relative z-10">
                <button 
                  className={`w-full rounded-lg py-3 px-4 font-medium text-white transition transform hover:scale-[1.02] ${colorMap[plan.color].button}`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}