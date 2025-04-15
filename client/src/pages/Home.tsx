import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import PricingSection from "@/components/landing/PricingSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import FaqSection from "@/components/landing/FaqSection";
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
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ResultsSection />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </motion.div>
  );
}
