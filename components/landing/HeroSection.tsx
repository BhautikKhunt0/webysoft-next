"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Globe,
} from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

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
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
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
              Partner with WebySoft for enterprise-grade web solutions. We
              deliver measurable ROI through strategic design, proven
              methodologies, and cutting-edge technology.
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
                { icon: Award, text: "Certified Quality Assurance" },
                { icon: Users, text: "Dedicated Project Management" },
                { icon: TrendingUp, text: "Proven ROI Enhancement" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    {feature.text}
                  </span>
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
              <motion.button
                onClick={() =>
                  window.open("https://wa.me/918849990393", "_blank")
                }
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() =>
                  window.open("https://wa.me/918849990393", "_blank")
                }
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
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  99.8%
                </div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  24/7
                </div>
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
                {/* Portfolio Showcase Carousel */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50">
                  <div className="aspect-[4/3] relative">
                    {/* Infinite Horizontal Scrolling Portfolio Images */}
                    <div className="relative h-full overflow-hidden">
                      <motion.div
                        className="flex h-full gap-3"
                        animate={{
                          x: [0, -100 * portfolioItems.length + "%"],
                        }}
                        transition={{
                          duration: portfolioItems.length * 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {/* First set of items */}
                        {portfolioItems.map((item, index) => (
                          <motion.div
                            key={`first-${item.id}`}
                            className="flex-shrink-0 w-fit h-full relative group cursor-pointer"
                            // onClick={() => window.open(item.previewLink, "_blank")}
                            whileHover={{ scale: 1.05, z: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative overflow-hidden rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-3 left-3 right-3">
                                  <p className="text-white text-xs font-semibold mb-1 line-clamp-1">
                                    {item.title}
                                  </p>
                                  <p className="text-blue-300 text-xs mb-2">
                                    {item.type}
                                  </p>
                                  <div className="flex flex-wrap gap-1 mb-2">
                                    {item.technologies
                                      .slice(0, 2)
                                      .map((tech, techIndex) => (
                                        <span
                                          key={techIndex}
                                          className="px-1.5 py-0.5 bg-slate-800/90 rounded text-xs text-gray-300"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-green-400 text-xs">
                                      <CheckCircle className="w-3 h-3" />
                                      <span>Live</span>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-blue-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {/* Duplicate set for seamless infinite scroll */}
                        {portfolioItems.map((item, index) => (
                          <motion.div
                            key={`second-${item.id}`}
                            className="flex-shrink-0 w-fit h-full relative group cursor-pointer"
                            // onClick={() =>
                            //   window.open(item.previewLink, "_blank")
                            // }
                            whileHover={{ scale: 1.05, z: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative overflow-hidden rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-3 left-3 right-3">
                                  <p className="text-white text-xs font-semibold mb-1 line-clamp-1">
                                    {item.title}
                                  </p>
                                  <p className="text-blue-300 text-xs mb-2">
                                    {item.type}
                                  </p>
                                  <div className="flex flex-wrap gap-1 mb-2">
                                    {item.technologies
                                      .slice(0, 2)
                                      .map((tech, techIndex) => (
                                        <span
                                          key={techIndex}
                                          className="px-1.5 py-0.5 bg-slate-800/90 rounded text-xs text-gray-300"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-green-400 text-xs">
                                      <CheckCircle className="w-3 h-3" />
                                      <span>Live</span>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-blue-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Side Gradient Overlays for infinite effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-800 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-800 to-transparent pointer-events-none z-10"></div>
                  </div>

                  {/* Professional overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur rounded-lg p-3 z-20">
                    <p className="text-white font-semibold text-sm">
                      Our Live Portfolio
                    </p>
                    <p className="text-gray-300 text-xs">
                      Click any project to visit the live website
                    </p>
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

                {/* Achievement Highlights */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-xs text-gray-400">
                      Industry Leader
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-xs text-gray-400">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-400" />
                    <span className="text-xs text-gray-400">Top Rated</span>
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
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-blue-500/20 backdrop-blur border border-blue-500/30 rounded-full p-3 shadow-lg"
            >
              <Shield className="w-6 h-6 text-blue-400" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 -left-8 bg-yellow-500/20 backdrop-blur border border-yellow-500/30 rounded-full p-3 shadow-lg"
            >
              <Award className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
