import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Shield, Award, Users, TrendingUp, CheckCircle, Star, ArrowRight, Clock, Globe } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      {/* Subtle Professional Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm font-medium text-blue-400 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ Businesses Worldwide</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>

            {/* Professional Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>{" "}
              That Drive Results
            </motion.h1>

            {/* Professional Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Partner with WebySoft for enterprise-grade web solutions. We deliver measurable ROI through strategic design, proven methodologies, and cutting-edge technology.
            </motion.p>

            {/* Professional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { icon: Shield, text: "Enterprise Security Standards" },
                { icon: Award, text: "ISO 9001:2015 Certified Quality" },
                { icon: Users, text: "Dedicated Project Management" },
                { icon: TrendingUp, text: "Proven ROI Enhancement" }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Professional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                onClick={() => window.open("https://wa.me/918849990393", "_blank")}
                className="inline-flex items-center justify-center gap-3 border border-slate-600 hover:border-green-500 text-gray-300 hover:text-white hover:bg-slate-800/50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                Chat with Expert
              </motion.button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700/50"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">99.8%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Image & Trust Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                
                {/* Professional Team Image */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50">
                  <div className="aspect-[4/5] flex items-center justify-center p-8">
                    {/* Professional SVG Illustration */}
                    <svg width="100%" height="100%" viewBox="0 0 300 380" fill="none" className="max-w-sm">
                      {/* Professional figure in suit */}
                      <defs>
                        <linearGradient id="suitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e40af" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f8fafc" />
                          <stop offset="100%" stopColor="#e2e8f0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Body */}
                      <ellipse cx="150" cy="320" rx="60" ry="40" fill="#1e293b" opacity="0.3"/>
                      <rect x="120" y="180" width="60" height="140" rx="30" fill="#1e293b"/>
                      
                      {/* Head */}
                      <circle cx="150" cy="80" r="35" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                      
                      {/* Hair */}
                      <path d="M115 60 Q150 40 185 60 Q185 45 150 35 Q115 45 115 60" fill="#374151"/>
                      
                      {/* Suit Jacket */}
                      <rect x="110" y="120" width="80" height="120" rx="8" fill="url(#suitGradient)" stroke="#1e40af" strokeWidth="1"/>
                      
                      {/* Shirt */}
                      <rect x="125" y="130" width="50" height="100" fill="url(#shirtGradient)" stroke="#cbd5e1" strokeWidth="1"/>
                      
                      {/* Tie */}
                      <polygon points="145,135 155,135 158,200 147,205 142,200" fill="#dc2626"/>
                      <circle cx="150" cy="135" r="3" fill="#991b1b"/>
                      
                      {/* Suit Details */}
                      <rect x="115" y="140" width="12" height="4" rx="2" fill="#1e40af"/>
                      <rect x="173" y="140" width="12" height="4" rx="2" fill="#1e40af"/>
                      
                      {/* Arms */}
                      <rect x="90" y="140" width="25" height="80" rx="12" fill="url(#suitGradient)"/>
                      <rect x="185" y="140" width="25" height="80" rx="12" fill="url(#suitGradient)"/>
                      
                      {/* Hands */}
                      <circle cx="102" cy="225" r="12" fill="#fbbf24"/>
                      <circle cx="198" cy="225" r="12" fill="#fbbf24"/>
                      
                      {/* Briefcase */}
                      <rect x="210" y="210" width="30" height="22" rx="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
                      <rect x="218" y="205" width="14" height="5" rx="2" fill="#6b7280"/>
                      <circle cx="225" cy="221" r="2" fill="#9ca3af"/>
                      
                      {/* Legs */}
                      <rect x="130" y="250" width="18" height="60" fill="#1e293b"/>
                      <rect x="152" y="250" width="18" height="60" fill="#1e293b"/>
                      
                      {/* Shoes */}
                      <ellipse cx="139" cy="315" rx="12" ry="8" fill="#000000"/>
                      <ellipse cx="161" cy="315" rx="12" ry="8" fill="#000000"/>
                      
                      {/* Professional accessories */}
                      <rect x="125" y="160" width="3" height="15" fill="#c0392b" opacity="0.8"/>
                      <rect x="172" y="160" width="3" height="15" fill="#c0392b" opacity="0.8"/>
                    </svg>
                  </div>
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Professional Excellence</p>
                    <p className="text-gray-300 text-sm">Certified experts delivering enterprise solutions</p>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/60 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-xl font-bold text-green-400">A+</div>
                    <div className="text-xs text-gray-400">Security Rating</div>
                  </motion.div>
                  <motion.div 
                    className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/60 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-xl font-bold text-blue-400">24/7</div>
                    <div className="text-xs text-gray-400">Expert Support</div>
                  </motion.div>
                </div>

                {/* Certifications */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-xs text-gray-400">ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-xs text-gray-400">Industry Leader</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-xs text-gray-400">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trust elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-green-500/20 backdrop-blur border border-green-500/30 rounded-full p-3 shadow-lg"
            >
              <CheckCircle className="w-6 h-6 text-green-400" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-blue-500/20 backdrop-blur border border-blue-500/30 rounded-full p-3 shadow-lg"
            >
              <Shield className="w-6 h-6 text-blue-400" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -left-8 bg-yellow-500/20 backdrop-blur border border-yellow-500/30 rounded-full p-3 shadow-lg"
            >
              <Award className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => scrollToSection("features")}
          role="button"
          aria-label="Scroll to explore content"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToSection("features");
            }
          }}
        >
          <span className="text-sm text-gray-400 mb-2">
            Discover Our Services
          </span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-blue-400/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
            <ArrowRight className="w-4 h-4 text-blue-400 transform rotate-90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}