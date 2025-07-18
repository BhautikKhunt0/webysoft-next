import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Award, Crown, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    "Custom Web Design",
    "Web Development", 
    "Hosting for 1 Year",
    "1 Year Domain",
    "24/7 Support",
    "SSL Certificate",
    "Mobile Responsive",
    "Analytics and Search Console Setup",
    "SEO Optimized Code",
    "Fast Page Speed Optimized",
    "2 Customizations per Month"
  ];

  const monthlyPrice = 37;
  const yearlyPrice = 317;
  const yearlySaving = (monthlyPrice * 12) - yearlyPrice;

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
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Web Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Complete web solution with custom design, development, and ongoing support for your business success.
          </motion.p>

          {/* Enhanced Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="relative bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-1.5 shadow-2xl overflow-hidden">
              <div className="relative flex items-center">
                {/* Sliding Background */}
                <motion.div
                  className="absolute top-1.5 bottom-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg"
                  initial={false}
                  animate={{
                    width: isYearly ? 'calc(55% - 6px)' : '45%',
                    left: isYearly ? '45%' : '6px',
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* Monthly Button */}
                <motion.button
                  onClick={() => setIsYearly(false)}
                  className={`relative z-10 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    !isYearly 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  style={{ width: '45%' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Monthly
                </motion.button>

                {/* Yearly Button */}
                <motion.button
                  onClick={() => setIsYearly(true)}
                  className={`relative z-10 px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${
                    isYearly 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  style={{ width: '55%' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Yearly</span>
                  <motion.span 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-lg flex-shrink-0"
                    animate={{ 
                      scale: isYearly ? [1, 1.1, 1] : 1,
                      boxShadow: isYearly ? 
                        ['0 0 0 rgba(34, 197, 94, 0)', '0 0 20px rgba(34, 197, 94, 0.4)', '0 0 0 rgba(34, 197, 94, 0)'] 
                        : '0 0 0 rgba(34, 197, 94, 0)'
                    }}
                    transition={{ duration: 0.6, repeat: isYearly ? Infinity : 0, repeatDelay: 2 }}
                  >
                    Save ${yearlySaving}
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="relative group transform-gpu perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Popular Badge */}
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
            >
              <motion.div 
                className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-2xl"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(147, 51, 234, 0.4)',
                    '0 0 30px rgba(147, 51, 234, 0.6)', 
                    '0 0 20px rgba(147, 51, 234, 0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-4 h-4 fill-current" />
                </motion.div>
                Best Value
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
              </motion.div>
            </motion.div>

            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-indigo-500/50 shadow-indigo-500/20 bg-gradient-to-br from-slate-800/50 to-indigo-900/20 rounded-2xl p-8 shadow-2xl h-full overflow-hidden transition-all duration-500 group-hover:shadow-3xl">

              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 opacity-5 blur-xl"></div>
              </div>

              {/* Plan Header */}
              <div className="relative text-center mb-8">
                <motion.div 
                  className="inline-flex p-4 rounded-xl bg-indigo-500/10 border-indigo-500/20 border mb-4 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 opacity-20 blur-md"></div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Award className="w-8 h-8 text-indigo-400 relative z-10" />
                  </motion.div>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Professional Plan
                </motion.h3>
                <p className="text-gray-400 text-sm leading-relaxed">Complete web solution for your business</p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-sm text-gray-400">$</span>
                  <motion.span 
                    className="text-4xl md:text-5xl font-bold text-white"
                    key={`price-${isYearly}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                  >
                    {isYearly ? yearlyPrice : monthlyPrice}
                  </motion.span>
                  <span className="text-gray-400">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {isYearly && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        className="text-sm text-green-400 font-semibold bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2 inline-block"
                        animate={{ 
                          boxShadow: [
                            '0 0 0 rgba(34, 197, 94, 0)',
                            '0 0 15px rgba(34, 197, 94, 0.3)',
                            '0 0 0 rgba(34, 197, 94, 0)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        💰 Save ${yearlySaving} annually
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start gap-3 group/feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-indigo-500/10 border-indigo-500/20 border flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-3 h-3 text-indigo-400" />
                    </motion.div>
                    <span className="text-gray-300 text-sm group-hover/feature:text-white transition-colors duration-200">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => window.open("https://wa.me/918849990393", "_blank")}
                className="relative w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button Content */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Sparkle Effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 left-6 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
                  <div className="absolute top-1/2 right-8 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-1000"></div>
                </div>
              </motion.button>

              {/* Trust Indicator */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Professional Quality & 24/7 Support Included
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 via-transparent to-slate-800/10"></div>

            <motion.h3 
              className="text-3xl font-bold text-white mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">WebySoft</span>
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 relative z-10">
              {[
                { icon: Shield, text: "Secure & Reliable", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                { icon: Award, text: "Quality Assured", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
                { icon: Crown, text: "24/7 Support", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { icon: Check, text: "Satisfaction Guaranteed", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className={`inline-flex p-4 rounded-xl ${item.bg} ${item.border} border mb-3 group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </motion.div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}