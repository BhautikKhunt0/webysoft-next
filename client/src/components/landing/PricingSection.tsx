import { motion } from "framer-motion";
import { Check, Shield, Award, Crown, ArrowRight, Star, DollarSign } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Professional",
    description: "Perfect for growing businesses seeking professional web presence",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    popular: false,
    features: [
      "Professional Website Design",
      "Mobile Responsive Layout",
      "SEO Optimization",
      "SSL Security Certificate",
      "3 Months Support",
      "Performance Optimization",
      "Basic Analytics Setup",
      "Content Management System"
    ],
    icon: Shield,
    color: "blue"
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for established businesses and corporations",
    monthlyPrice: 4999,
    yearlyPrice: 49990,
    popular: true,
    features: [
      "Everything in Professional",
      "Advanced Security Features",
      "24/7 Priority Support",
      "Custom Integrations",
      "Advanced Analytics",
      "Multi-language Support",
      "API Development",
      "Database Integration",
      "Load Balancing",
      "Backup & Recovery"
    ],
    icon: Award,
    color: "indigo"
  },
  {
    name: "Premium",
    description: "Ultimate solution for large enterprises with complex requirements",
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    popular: false,
    features: [
      "Everything in Enterprise",
      "Dedicated Account Manager",
      "Custom Development",
      "White-label Solutions",
      "Advanced Security Audit",
      "Compliance Certification",
      "Priority Development Queue",
      "Custom SLA Agreement",
      "On-site Consultation",
      "Training & Documentation"
    ],
    icon: Crown,
    color: "purple"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    gradient: "from-blue-600 to-blue-700",
    shadow: "shadow-blue-500/25"
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    gradient: "from-indigo-600 to-indigo-700",
    shadow: "shadow-indigo-500/25"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    gradient: "from-purple-600 to-purple-700",
    shadow: "shadow-purple-500/25"
  }
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-6"
          >
            <Crown className="w-4 h-4" />
            <span>Pricing Plans</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose the perfect investment level for your enterprise needs. All plans include ISO-certified quality, enterprise security, and professional support.
          </motion.p>

          {/* Simple Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-1">
              <div className="relative flex items-center">
                {/* Monthly Button */}
                <button
                  onClick={() => setIsYearly(false)}
                  className={`relative z-10 px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 ${
                    !isYearly 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400'
                  }`}
                >
                  Monthly
                </button>
                
                {/* Yearly Button */}
                <button
                  onClick={() => setIsYearly(true)}
                  className={`relative z-10 px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 flex items-center gap-2 ${
                    isYearly 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400'
                  }`}
                >
                  Yearly
                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const colors = colorClasses[plan.color as keyof typeof colorClasses];
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${
                  plan.popular 
                    ? 'scale-105 md:scale-110' 
                    : 'hover:scale-105'
                } transition-transform duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`relative bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 shadow-2xl h-full ${
                  plan.popular 
                    ? 'border-indigo-500/50 shadow-indigo-500/20' 
                    : 'hover:border-slate-600/50'
                } transition-all duration-300`}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-xl ${colors.bg} ${colors.border} border mb-4`}>
                      <plan.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-sm text-gray-400">$</span>
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {(price / 100).toLocaleString('en-US')}
                      </span>
                      <span className="text-gray-400">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-400 mt-2">
                        Save ${((plan.monthlyPrice * 12 - plan.yearlyPrice) / 100).toLocaleString('en-US')} annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => window.open("https://wa.me/918849990393", "_blank")}
                    className={`w-full bg-gradient-to-r ${colors.gradient} hover:shadow-xl hover:${colors.shadow} text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Trust Indicator */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      <Shield className="w-3 h-3 inline mr-1" />
                      Enterprise Security & 24/7 Support Included
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              All Plans Include Enterprise Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">ISO Security</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Quality Certified</p>
              </div>
              <div className="text-center">
                <Crown className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Premium Support</p>
              </div>
              <div className="text-center">
                <Check className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Guaranteed ROI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}