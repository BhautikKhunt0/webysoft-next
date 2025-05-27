import React, { useEffect } from "react";
import Navbar from "@/components/landing/NavbarNew";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { useHashNavigation } from "@/hooks/useHashNavigation";

export default function Home() {
  // Use the hash navigation hook to handle section scrolling
  useHashNavigation();
  
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
      className="min-h-screen bg-slate-900 text-foreground overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}