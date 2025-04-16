import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

// Define types for our pricing plans and color schemes
type PlanColor = 'primary' | 'accent' | 'green';

type Feature = {
  title: string;
  icon: string;
};

type Plan = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: PlanColor;
  monthly: number;
  yearly: number;
  yearlySaving: number;
  popular: boolean;
  features: Feature[];
};

type ColorScheme = {
  bg: string;
  bgLight: string;
  bgMedium: string;
  text: string;
  border: string;
  borderLight: string;
  gradient: string;
  shadow: string;
  glowHover: string;
};

type ColorSchemes = {
  primary: ColorScheme;
  accent: ColorScheme;
  green: ColorScheme;
  [key: string]: ColorScheme;
};

// Define all our pricing plans
const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Get online quickly",
    description: "Perfect for small businesses just getting started with their online presence",
    color: "accent",
    monthly: 99,
    yearly: 990,
    yearlySaving: 198,
    popular: false,
    features: [
      { title: 'Single landing page', icon: 'ri-layout-line' },
      { title: 'Mobile responsive design', icon: 'ri-smartphone-line' },
      { title: 'Basic animations', icon: 'ri-slideshow-line' },
      { title: 'Contact form with validation', icon: 'ri-mail-check-line' },
      { title: 'SEO optimization', icon: 'ri-search-line' },
      { title: 'Email support', icon: 'ri-mail-line' },
    ]
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Most popular choice",
    description: "Our most popular plan for growing businesses with advanced needs",
    color: "primary",
    monthly: 149,
    yearly: 1490,
    yearlySaving: 298,
    popular: true,
    features: [
      { title: 'Up to 5 landing pages', icon: 'ri-layout-grid-line' },
      { title: 'Responsive across all devices', icon: 'ri-device-line' },
      { title: 'Advanced animations', icon: 'ri-film-line' },
      { title: 'Smart forms with validation', icon: 'ri-mail-check-line' },
      { title: 'Analytics integration', icon: 'ri-line-chart-line' },
      { title: 'Advanced SEO optimization', icon: 'ri-search-line' },
      { title: 'A/B testing capabilities', icon: 'ri-split-cells-horizontal' },
      { title: 'Priority support', icon: 'ri-customer-service-2-line' },
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Maximum performance",
    description: "Complete solution for large organizations with complex requirements",
    color: "green",
    monthly: 299,
    yearly: 2990,
    yearlySaving: 598,
    popular: false,
    features: [
      { title: 'Unlimited landing pages', icon: 'ri-layout-masonry-line' },
      { title: 'All device optimization', icon: 'ri-responsive-line' },
      { title: 'Premium animations & effects', icon: 'ri-emotion-line' },
      { title: 'Advanced form systems', icon: 'ri-file-list-3-line' },
      { title: 'Enterprise analytics & reports', icon: 'ri-bar-chart-grouped-line' },
      { title: 'Advanced SEO suite', icon: 'ri-global-line' },
      { title: 'Comprehensive A/B testing', icon: 'ri-test-tube-line' },
      { title: 'Dedicated account manager', icon: 'ri-service-line' },
      { title: 'Custom API integrations', icon: 'ri-plug-2-line' },
      { title: 'Monthly performance reviews', icon: 'ri-file-chart-line' },
    ]
  }
];

// Define color schemes for each plan type
const colorSchemes: ColorSchemes = {
  primary: {
    bg: 'bg-primary',
    bgLight: 'bg-primary/10',
    bgMedium: 'bg-primary/20',
    text: 'text-primary',
    border: 'border-primary',
    borderLight: 'border-primary/20',
    gradient: 'from-primary/20',
    shadow: 'shadow-primary/30',
    glowHover: 'hover:shadow-primary/40',
  },
  accent: {
    bg: 'bg-accent',
    bgLight: 'bg-accent/10',
    bgMedium: 'bg-accent/20',
    text: 'text-accent',
    border: 'border-accent',
    borderLight: 'border-accent/20',
    gradient: 'from-accent/20',
    shadow: 'shadow-accent/30',
    glowHover: 'hover:shadow-accent/40',
  },
  green: {
    bg: 'bg-[#10B981]',
    bgLight: 'bg-[#10B981]/10',
    bgMedium: 'bg-[#10B981]/20',
    text: 'text-[#10B981]',
    border: 'border-[#10B981]',
    borderLight: 'border-[#10B981]/20',
    gradient: 'from-[#10B981]/20',
    shadow: 'shadow-[#10B981]/30',
    glowHover: 'hover:shadow-[#10B981]/40',
  }
};

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [animationComplete, setAnimationComplete] = useState(true);

  // Get the savings text for display under the price
  const getSavingsText = (plan: Plan) => {
    if (isYearly) {
      const monthlyEquivalent = Math.round(plan.yearly / 12);
      return `$${monthlyEquivalent}/mo (billed annually)`;
    }
    return null;
  };

  // Calculate percentage saved with yearly plan
  const calculateSavingsPercentage = (plan: Plan) => {
    const monthlyCost = plan.monthly * 12;
    const yearlyCost = plan.yearly;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <div className="py-4 overflow-x-hidden">
      {/* Heading and billing toggle */}
      <div className="flex flex-col items-center mb-12">
        {/* Billing toggle */}
        <motion.div 
          className="glass rounded-full p-1.5 inline-flex mb-10 shadow-lg relative"
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
              className="absolute -top-6 -right-4 bg-[#10B981] text-white text-xs px-2 py-1 rounded-full shadow-md"
            >
              Save 20%
            </motion.span>
          </button>
        </motion.div>

        {/* Plan selector tabs */}
        <div className="relative w-full max-w-2xl mx-auto">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-[#10B981]/20 blur-xl -z-10 opacity-70"
            animate={{
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10 z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {plans.map((plan) => (
              <motion.button
                key={plan.id}
                className={`px-5 py-3 rounded-full transition-all shadow-md ${
                  selectedPlan === plan.id 
                    ? `${colorSchemes[plan.color].bg} text-white scale-105` 
                    : `backdrop-blur-sm bg-background/60 border border-white/10 hover:${colorSchemes[plan.color].bg} hover:text-white`
                }`}
                whileHover={{ scale: selectedPlan === plan.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Plan details cards - now with transition effects between cards */}
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
                className="relative"
              >
                {/* Floating decoration elements */}
                <motion.div 
                  className={`absolute -top-10 -right-10 w-40 h-40 ${colorSchemes[plan.color].bgLight} rounded-full blur-3xl -z-10 opacity-60`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className={`absolute -bottom-10 -left-10 w-40 h-40 ${colorSchemes[plan.color].bgLight} rounded-full blur-3xl -z-10 opacity-60`}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.55, 0.4],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                
                <GlassCard 
                  className={`flex flex-col h-full w-full relative overflow-hidden border-2 ${colorSchemes[plan.color].border} shadow-xl ${colorSchemes[plan.color].shadow}`}
                  is3D={true}
                  borderGlow={plan.color === "green" ? "green" : plan.color === "accent" ? "accent" : "primary"}
                  animate={false}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -right-12 top-7 bg-primary text-white px-14 py-1 text-sm font-bold rotate-45 z-10 shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  {/* Background gradients */}
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${colorSchemes[plan.color].gradient} to-transparent -z-0`}></div>
                  
                  <div className="p-6 md:p-8 flex-grow relative z-10">
                    {/* Header section with price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-start">
                      <div>
                        {/* Plan name and tag */}
                        <div className={`inline-block ${colorSchemes[plan.color].bgLight} ${colorSchemes[plan.color].text} px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                          {plan.tagline}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">WebySoft {plan.name}</h3>
                        
                        {/* Price display with animation */}
                        <div className="mb-2">
                          <motion.div 
                            className="flex items-baseline"
                            key={`${plan.id}-${isYearly ? 'yearly' : 'monthly'}-price`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-5xl font-bold mr-2">
                              ${isYearly ? plan.yearly : plan.monthly}
                            </span>
                            <span className="text-foreground/60 text-lg">
                              {isYearly ? '/year' : '/month'}
                            </span>
                          </motion.div>
                          
                          {/* Yearly savings display */}
                          {isYearly && (
                            <div className={`mt-1 ${colorSchemes[plan.color].text} flex items-center`}>
                              <i className="ri-coupon-3-line mr-1"></i>
                              <span>Save {calculateSavingsPercentage(plan)}%</span>
                            </div>
                          )}
                          
                          {/* Monthly equivalent for yearly plans */}
                          {getSavingsText(plan) && (
                            <div className="text-sm text-foreground/60 mt-1">
                              {getSavingsText(plan)}
                            </div>
                          )}
                        </div>
                        
                        {/* Description */}
                        <p className="text-foreground/80 text-sm md:text-base mt-4 max-w-md">
                          {plan.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-center md:items-end">
                        {/* CTA button */}
                        <motion.button 
                          className={`w-full md:w-auto rounded-lg py-4 px-8 font-medium text-white transition ${colorSchemes[plan.color].bg} hover:brightness-110 text-base md:text-lg mb-3 shadow-lg ${colorSchemes[plan.color].shadow}`}
                          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Get Started Now
                          <i className="ri-arrow-right-line ml-2"></i>
                        </motion.button>
                        
                        {/* Trial notice */}
                        <div className="text-center text-foreground/60 text-sm mt-2">
                          14-day free trial, no credit card required
                        </div>
                        
                        {/* Extra features highlight */}
                        <div className={`mt-6 text-sm rounded-md ${colorSchemes[plan.color].bgLight} p-3 inline-block`}>
                          <div className="flex items-center">
                            <i className={`ri-shield-check-line ${colorSchemes[plan.color].text} mr-2`}></i>
                            <span>Money back guarantee for 30 days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features list */}
                    <div className="border-t border-white/10 pt-8">
                      <h4 className="text-xl font-bold mb-6 flex items-center">
                        <i className={`${colorSchemes[plan.color].text} ri-check-double-line mr-2`}></i>
                        Plan features:
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {plan.features.map((feature, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.04 * i }}
                          >
                            <div className={`flex items-center justify-center ${colorSchemes[plan.color].bgLight} rounded-full w-8 h-8 mr-3 mt-0.5 flex-shrink-0`}>
                              <i className={`${feature.icon} ${colorSchemes[plan.color].text} text-base`}></i>
                            </div>
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

        {/* Bottom notice */}
        <motion.div 
          className="text-center mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-4 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-foreground/70">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact our team</a> for personalized pricing.
          </p>
        </motion.div>
      </div>
    </div>
  );
}