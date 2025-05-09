import { useEffect } from "react";
import Navbar from "@/components/landing/NavbarNew";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingToggle from "@/components/landing/PricingToggle";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
import ResultsSection from "@/components/landing/ResultsSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactSection from "@/components/landing/ContactSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import BackgroundParticles from "@/components/landing/BackgroundParticles";
import { motion } from "framer-motion";

export default function Home() {
  // Update document metadata
  useEffect(() => {
    document.title = "WebySoft - Turn Ideas Into High-Converting Experiences";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'WebySoft builds cutting-edge landing pages that don\'t just look amazing — they convert. Get started with high-converting web experiences.');
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <BackgroundParticles />
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <HowItWorksSection />
      
      {/* New updated pricing section with interactive toggle */}
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
            Pricing <span className="text-primary text-glow">Plans</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-foreground/70 text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the perfect plan for your business needs with our transparent pricing options.
          </motion.p>
          
          <PricingToggle />
        </div>
      </section>
      
      {/* Enhanced testimonials with interactive carousel */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            What Our <span className="text-primary text-glow">Clients</span> Say
          </motion.h2>
          
          <motion.p 
            className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't just take our word for it. Here's what others are saying about WebySoft.
          </motion.p>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      <ResultsSection />
      <FaqSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </motion.div>
  );
}
