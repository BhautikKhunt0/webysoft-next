import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

// Define features for our pricing plan
const features = [
  { title: 'Custom designed landing page', icon: 'ri-layout-grid-line' },
  { title: 'Mobile & tablet responsive design', icon: 'ri-device-line' },
  { title: 'Advanced animations & effects', icon: 'ri-film-line' },
  { title: 'Contact forms with validation', icon: 'ri-mail-check-line' },
  { title: 'Analytics integration', icon: 'ri-line-chart-line' },
  { title: 'SEO optimization', icon: 'ri-search-line' },
  { title: 'A/B testing capabilities', icon: 'ri-split-cells-horizontal' },
  { title: 'Priority customer support', icon: 'ri-customer-service-2-line' },
  { title: 'Custom integrations', icon: 'ri-plug-2-line' },
  { title: 'Monthly performance reports', icon: 'ri-file-chart-line' }
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
          className="glass rounded-full p-1.5 inline-flex mb-10 shadow-lg"
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
            className={`py-3 px-6 md:px-8 rounded-full font-medium transition-all ${isYearly ? 'bg-primary text-white shadow-lg' : 'text-foreground hover:text-primary'}`}
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
        >
          <GlassCard 
            className="flex flex-col h-full w-full relative overflow-hidden border-2 border-primary"
            is3D={true}
            borderGlow="primary"
          >
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg z-10">
              PROFESSIONAL PLAN
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent -z-0"></div>
            
            <div className="p-8 flex-grow relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  WebySoft Professional
                </div>
                
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold">
                    ${isYearly ? yearlyPrice : monthlyPrice}
                  </span>
                  <span className="text-foreground/60 ml-2">
                    {isYearly ? '/year' : ' for first month'}
                  </span>
                </div>
                
                {!isYearly && (
                  <div className="text-lg text-primary">
                    ${monthlyOngoing}/month after first month
                  </div>
                )}
                
                {isYearly && (
                  <div className="text-lg text-primary">
                    Save ${(monthlyOngoing * 12) - yearlyPrice} compared to monthly plan
                  </div>
                )}
              </div>
              
              <p className="text-foreground/70 mb-8 text-center text-lg max-w-2xl mx-auto">
                Get everything you need to create a high-converting landing page that drives business growth
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full w-8 h-8 mr-3 mt-0.5 flex-shrink-0">
                      <i className={`${feature.icon} text-primary text-base`}></i>
                    </div>
                    <span>{feature.title}</span>
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
                className="w-full block text-center rounded-lg py-4 px-4 font-medium text-white transition transform hover:scale-[1.02] bg-primary hover:bg-primary/90 text-lg cursor-pointer"
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
          className="text-center mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-4 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-foreground/70">
            Have questions? <a href="#contact" className="text-primary hover:underline">Contact our team</a> for more information.
          </p>
        </motion.div>
      </div>
    </div>
  );
}