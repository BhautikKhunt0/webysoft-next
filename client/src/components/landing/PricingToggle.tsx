import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FiSmartphone, FiActivity } from 'react-icons/fi';
import { MdOutlineMarkEmailRead, MdOutlineSupportAgent, MdOutlineAnalytics } from 'react-icons/md';
import { BsSpeedometer, BsSearch, BsFileEarmarkBarGraph } from 'react-icons/bs';

// Define features for our pricing plan with modern React icons
const features = [
  { title: 'Custom designed landing page', icon: HiOutlineDesktopComputer },
  { title: 'Mobile & tablet responsive design', icon: FiSmartphone },
  { title: 'Advanced animations & effects', icon: FiActivity },
  { title: 'Contact forms with validation', icon: MdOutlineMarkEmailRead },
  { title: 'Analytics integration', icon: MdOutlineAnalytics },
  { title: 'SEO optimization', icon: BsSearch },
  { title: 'Performance optimization', icon: BsSpeedometer },
  { title: 'Priority customer support', icon: MdOutlineSupportAgent },
  { title: 'Social media integration', icon: BsSearch },
  { title: 'Monthly performance reports', icon: BsFileEarmarkBarGraph }
];

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);
  
  // Monthly plan details
  const monthlyPrice = 150;
  const monthlyOngoing = 25;
  
  // Yearly plan details
  const yearlyPrice = 300;
  
  return (
    <div className="py-4">
      {/* Billing toggle */}
      <div className="flex flex-col items-center mb-12">
        <motion.div 
          className="glass rounded-full p-1.5 flex mb-10 shadow-lg relative overflow-hidden w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Moving background highlight */}
          <motion.div 
            className={`absolute inset-1.5 rounded-full ${isYearly ? 'bg-[#10B981]' : 'bg-primary'} z-0 transition-colors duration-500`}
            animate={{ 
              x: isYearly ? '50%' : '0%',
              translateX: isYearly ? '0%' : '-0%'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: '50%' }}
          />
          
          <button 
            className={`py-3 px-6 md:px-8 rounded-full font-medium transition-all duration-300 relative z-10 flex-1 min-w-0 text-center ${!isYearly ? 'text-white' : 'text-foreground hover:text-primary'}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={`py-3 px-6 md:px-8 rounded-full font-medium transition-all duration-300 relative z-10 flex-1 min-w-0 text-center ${isYearly ? 'text-white' : 'text-foreground hover:text-[#10B981]'}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </motion.div>
      </div>
      
      {/* Pricing Card */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="transition-all duration-300"
        >
          <GlassCard 
            className="flex flex-col h-full w-full relative overflow-hidden border-2 transition-all duration-500"
            is3D={true}
            borderGlow={isYearly ? "green" : "primary"}
          >
            {/* Highlight badge */}
            <div className={`absolute top-0 right-0 ${isYearly ? 'bg-[#10B981]' : 'bg-primary'} text-white px-4 py-2 text-sm font-medium rounded-bl-lg z-10 transition-colors duration-500`}>
              {isYearly ? 'BEST VALUE' : 'PROFESSIONAL PLAN'}
            </div>
            
            {/* Background gradient that changes with plan type */}
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${isYearly ? 'from-[#10B981]/20' : 'from-primary/20'} to-transparent -z-0 transition-colors duration-500`}></div>
            
            <div className="p-8 flex-grow relative z-10">
              <div className="text-center mb-8">
                <div className={`inline-block ${isYearly ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-primary/10 text-primary'} px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-colors duration-500`}>
                  WebySoft Professional
                </div>
                
                <div className="flex items-center justify-center mb-2">
                  <span className={`text-6xl font-bold ${isYearly ? 'text-[#10B981]' : 'text-primary'} transition-colors duration-500`}>
                    ${isYearly ? yearlyPrice : monthlyPrice}
                  </span>
                  <span className="text-foreground/60 ml-2 text-lg">
                    {isYearly ? '/year' : ' first month'}
                  </span>
                </div>
                
                {!isYearly && (
                  <div className="text-lg text-primary mt-1">
                    ${monthlyOngoing} afterwards
                  </div>
                )}
                
                {isYearly && (
                  <div className="text-lg text-[#10B981] mt-1">
                    Save $125 compared to monthly
                  </div>
                )}
              </div>
              
              <div className={`h-1 w-24 mx-auto ${isYearly ? 'bg-[#10B981]' : 'bg-primary'} rounded-full mb-8 transition-colors duration-500`}></div>
              
              <p className="text-foreground/80 mb-10 text-center text-lg max-w-2xl mx-auto">
                Get everything you need to create a high-converting landing page that drives business growth
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start group">
                    <div className={`flex items-center justify-center ${isYearly ? 'bg-[#10B981]/10' : 'bg-primary/10'} rounded-full w-10 h-10 mr-3 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className={`w-5 h-5 ${isYearly ? 'text-[#10B981]' : 'text-primary'} transition-colors duration-500`} />
                    </div>
                    <div>
                      <span className="font-medium">{feature.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 pt-0 relative z-10">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full block text-center rounded-lg py-4 px-6 font-medium text-white transition-all transform hover:scale-[1.02] ${isYearly ? 'bg-[#10B981] hover:bg-[#10B981]/90 hover:shadow-[#10B981]/20' : 'bg-primary hover:bg-primary/90 hover:shadow-primary/20'} text-lg cursor-pointer shadow-lg hover:shadow-xl`}
              >
                Get Started Now
              </a>
              <p className="text-center text-sm mt-4 text-foreground/60">
                No credit card required. Start your journey today.
              </p>
            </div>
          </GlassCard>
        </motion.div>
        
        <motion.div 
          className="text-center mt-10 bg-white/5 backdrop-blur-sm rounded-xl p-5 max-w-lg mx-auto border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-foreground/70">
            Have questions? <a href="#contact" className={`${isYearly ? 'text-[#10B981]' : 'text-primary'} hover:underline transition-colors duration-500`}>Contact our team</a> for more information.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
