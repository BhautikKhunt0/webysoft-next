import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon
import { Link } from "wouter";
import { getFeaturedPortfolioItems, getPortfolioItemsByType } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get portfolio items for showcase
  const featuredItems = getFeaturedPortfolioItems();
  const serviceItems = getPortfolioItemsByType("Service");
  const legalItems = getPortfolioItemsByType("Legal");
  const academyItems = getPortfolioItemsByType("Academy");
  const localShopItems = getPortfolioItemsByType("Local Shop");

  // Create showcase items array with one from each category
  const showcaseItems = [
    serviceItems[0] || featuredItems[0], // Service - HR Consultancy
    legalItems[0] || featuredItems[1], // Legal - Accountant Firm  
    localShopItems[0] || serviceItems[1], // Local Shop - Car Repair (as fallback)
    academyItems[0] || featuredItems[2], // Academy - Boxing Academy
  ].filter(Boolean);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden gradient-bg">
      {/* Royal decoration elements */}
      <div className="absolute top-16 left-6 lg:left-16 w-32 h-32 md:w-40 md:h-40 opacity-15 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-16 right-6 lg:right-16 w-32 h-32 md:w-64 md:h-64 opacity-15 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            className="mb-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-1 bg-accent mb-2 rounded-full"></div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block">
              Transform <span className="text-glow text-primary">Visions</span>{" "}
              Into
            </span>
            <span className="block">
              Premium <span className="gradient-text">Experiences</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We create visually stunning and conversion-focused landing pages
            that bring your website to life, elevate your brand, and truly
            engage your audience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="royal-border bg-primary hover:bg-primary/90 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-base transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center"
            >
              <span>Get Started</span>
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
            <button
              onClick={() => window.open("https://wa.me/918849990393", "_blank")}
              className="premium-chat-button font-medium text-base"
              aria-label="Chat on WhatsApp"
            >
              <span className="chat-icon">
                <FaWhatsapp className="text-lg" />
              </span>
              <span className="button-text">Chat with an Expert</span>
            </button>
          </motion.div>
        </div>

        {/* 3D Mockup Device */}
        {/* Creative Projects Showcase */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Floating Elements Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-10 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-10 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
              animate={{ 
                y: [0, 20, 0],
                x: [0, -15, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Header with Animated Text */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative inline-block">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200 bg-pos-0"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Our Digital Masterpieces
                </motion.h2>
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                />
              </div>
              <motion.p 
                className="mt-4 text-lg text-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Transforming visions into digital reality
              </motion.p>
            </motion.div>

            {/* Creative Grid Layout */}
            <div className="relative">
              {/* Main Featured Project - Large Center */}
              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link href="/portfolio">
                  <motion.div 
                    className="relative group cursor-pointer max-w-3xl mx-auto"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Featured Project */}
                      {showcaseItems[0] && (
                        <>
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <img 
                              src={showcaseItems[0].imageUrl}
                              alt={showcaseItems[0].title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          </div>
                          
                          {/* Project Info Overlay */}
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 p-8 text-white"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.8 }}
                          >
                            <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                              Featured Project
                            </span>
                            <h3 className="text-2xl font-bold mb-2">{showcaseItems[0].title}</h3>
                            <p className="text-white/80 mb-4">{showcaseItems[0].description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-primary font-medium">{showcaseItems[0].type}</span>
                              <motion.div 
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1 }}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </motion.div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Secondary Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {showcaseItems.slice(1).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + (index * 0.2) }}
                  >
                    <Link href="/portfolio">
                      <motion.div 
                        className="relative group cursor-pointer"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-primary/10 shadow-xl bg-gradient-to-br from-background/50 to-secondary/30 backdrop-blur-sm">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h4 className="font-semibold mb-1 truncate">{item.title}</h4>
                            <p className="text-xs text-white/70 truncate">{item.type}</p>
                          </div>
                          
                          <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <Link href="/portfolio">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore All Projects
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator - Now Clickable */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => scrollToSection("problem-solution")}
          role="button"
          aria-label="Scroll to explore content"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToSection("problem-solution");
            }
          }}
        >
          <span className="text-sm text-foreground/60 mb-2 ">
            Scroll to explore
          </span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-primary/30 bg-primary/10">
            <i className="ri-arrow-down-line text-lg text-primary"></i>
          </div>
        </motion.div>
      </div>
    </section>
  );
}