'use client'

import React from "react";
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

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <div className="bg-red-500 text-white p-4 text-center">DEBUG: Page is rendering</div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}