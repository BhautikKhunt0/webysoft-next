import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses just getting started with their online presence",
    color: "accent",
    monthly: 99,
    yearly: 990,
    monthlySaving: 0,
    yearlySaving: 198,
    features: [
      { title: 'Single landing page', icon: 'ri-layout-line' },
      { title: 'Mobile responsive design', icon: 'ri-smartphone-line' },
      { title: 'Basic animations', icon: 'ri-slideshow-line' },
      { title: 'Contact form with validation', icon: 'ri-mail-check-line' },
      { title: 'SEO optimization', icon: 'ri-search-line' },
    ]
  },
  {
    id: "professional",
    name: "Professional",
    description: "Our most popular plan for growing businesses with advanced needs",
    color: "primary",
    monthly: 149,
    yearly: 1490,
    monthlySaving: 0,
    yearlySaving: 298,
    popular: true,
    features: [
      { title: 'Up to 5 landing pages', icon: 'ri-layout-grid-line' },
      { title: 'Mobile & tablet responsive design', icon: 'ri-device-line' },
      { title: 'Advanced animations and effects', icon: 'ri-film-line' },
      { title: 'Contact forms with validation', icon: 'ri-mail-check-line' },
      { title: 'Analytics integration', icon: 'ri-line-chart-line' },
      { title: 'SEO optimization', icon: 'ri-search-line' },
      { title: 'A/B testing capabilities', icon: 'ri-split-cells-horizontal' },
      { title: 'Priority customer support', icon: 'ri-customer-service-2-line' },
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Complete solution for large organizations with complex requirements",
    color: "green",
    monthly: 299,
    yearly: 2990,
    monthlySaving: 0,
    yearlySaving: 598,
    features: [
      { title: 'Unlimited landing pages', icon: 'ri-layout-masonry-line' },
      { title: 'All device responsive design', icon: 'ri-responsive-line' },
      { title: 'Premium animations and effects', icon: 'ri-emotion-line' },
      { title: 'Advanced form system', icon: 'ri-file-list-3-line' },
      { title: 'Analytics with detailed reports', icon: 'ri-bar-chart-grouped-line' },
      { title: 'Advanced SEO optimization', icon: 'ri-global-line' },
      { title: 'Comprehensive A/B testing', icon: 'ri-test-tube-line' },
      { title: 'Dedicated customer support', icon: 'ri-service-line' },
      { title: 'Custom integrations', icon: 'ri-plug-2-line' },
      { title: 'Monthly performance reports', icon: 'ri-file-chart-line' },
    ]
  }
];

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [isHovering, setIsHovering] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);
  
  const colorClasses = {
    primary: {
      bg: 'bg-primary',
      bgLight: 'bg-primary/10',
      text: 'text-primary',
      border: 'border-primary',
      borderLight: 'border-primary/20',
      gradient: 'from-primary/20',
      shadow: 'shadow-primary/30',
    },
    accent: {
      bg: 'bg-accent',
      bgLight: 'bg-accent/10',
      text: 'text-accent',
      border: 'border-accent',
      borderLight: 'border-accent/20',
      gradient: 'from-accent/20',
      shadow: 'shadow-accent/30',
    },
    green: {
      bg: 'bg-[#10B981]',
      bgLight: 'bg-[#10B981]/10',
      text: 'text-[#10B981]',
      border: 'border-[#10B981]',
      borderLight: 'border-[#10B981]/20',
      gradient: 'from-[#10B981]/20',
      shadow: 'shadow-[#10B981]/30',
    }
  };

  // Calculate the savings
  const getSavingsText = (plan) => {
    if (isYearly) {
      const monthlyEquivalent = (plan.yearly / 12).toFixed(0);
      return `$${monthlyEquivalent}/mo (billed annually)`;
    }
    return "/month";
  };

  return (
    <div className="py-4">
      {/* Pricing Toggle */}
      <div className="flex flex-col items-center mb-12">
        <motion.div 
          className="glass rounded-full p-1.5 inline-flex mb-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className={`py-3 px-6 md:px-8 rounded-full font-medium transition-all ${!isYearly ? 'bg-primary text-white shadow-lg' : 'text-foreground hover:text-primary'}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={`py-3 px-6 md:px-8 rounded-full font-medium transition-all flex items-center relative ${isYearly ? 'bg-[#10B981] text-white shadow-lg' : 'text-foreground hover:text-[#10B981]'}`}
            onClick={() => setIsYearly(true)}
          >
            <span>Yearly</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-6 -right-4 bg-[#10B981] text-white text-xs px-2 py-1 rounded-full"
            >
              Save 20%
            </motion.span>
          </button>
        </motion.div>

        {/* Plan Selector Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {plans.map((plan) => (
            <button
              key={plan.id}
              className={`px-5 py-3 rounded-full transition-all ${
                selectedPlan === plan.id 
                  ? `${colorClasses[plan.color].bg} text-white shadow-lg` 
                  : `glass hover:${colorClasses[plan.color].bgLight} hover:${colorClasses[plan.color].text}`
              }`}
              onClick={() => {
                if (animationComplete) {
                  setAnimationComplete(false);
                  setSelectedPlan(plan.id);
                }
              }}
            >
              {plan.name}
              {plan.popular && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
            </button>
          ))}
        </motion.div>
      </div>
      
      {/* Plan Details Cards */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait" onExitComplete={() => setAnimationComplete(true)}>
          {plans.map((plan) => (
            plan.id === selectedPlan && (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard 
                  className={`flex flex-col h-full w-full relative overflow-hidden border-2 ${colorClasses[plan.color].border}`}
                  is3D={true}
                  borderGlow={plan.color === "green" ? "green" : plan.color === "accent" ? "accent" : "primary"}
                  animate={false}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 top-7 bg-primary text-white px-14 py-1 text-sm font-bold rotate-45 z-10">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${colorClasses[plan.color].gradient} to-transparent -z-0`}></div>
                  
                  <div className="p-6 md:p-8 flex-grow relative z-10">
                    <div className="text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                      <div className="mb-6 md:mb-0">
                        <div className={`inline-block ${colorClasses[plan.color].bgLight} ${colorClasses[plan.color].text} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                          WebySoft {plan.name}
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-end md:gap-3 mb-2">
                          <motion.span 
                            className="text-5xl md:text-6xl font-bold"
                            key={`${plan.id}-${isYearly ? 'yearly' : 'monthly'}-price`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            ${isYearly ? plan.yearly : plan.monthly}
                          </motion.span>
                          <span className="text-foreground/60">
                            {isYearly ? '/year' : '/month'}
                          </span>
                        </div>
                        
                        <div className={`text-sm md:text-base ${colorClasses[plan.color].text}`}>
                          {getSavingsText(plan)}
                        </div>
                      </div>
                      
                      <div className="md:text-right">
                        <p className="text-foreground/80 mb-4 text-sm md:text-base max-w-md mx-auto md:ml-auto md:mr-0">
                          {plan.description}
                        </p>
                        
                        <motion.button 
                          className={`w-full md:w-auto rounded-lg py-3 px-8 font-medium text-white transition ${colorClasses[plan.color].bg} hover:brightness-110 text-base md:text-lg`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onMouseEnter={() => setIsHovering(true)}
                          onMouseLeave={() => setIsHovering(false)}
                        >
                          Get Started Now
                          <i className="ri-arrow-right-line ml-2"></i>
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-8">
                      <h4 className="text-xl font-bold mb-6 flex items-center">
                        <i className={`${colorClasses[plan.color].text} ri-check-double-line mr-2`}></i>
                        What's included:
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plan.features.map((feature, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.05 * i }}
                          >
                            <i className={`${feature.icon} ${colorClasses[plan.color].text} mt-0.5 mr-3 text-lg`}></i>
                            <span>{feature.title}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <div className="text-center mt-6 text-foreground/60 text-sm">
          All plans include 14-day free trial. No credit card required.
        </div>
      </div>
    </div>
  );
}