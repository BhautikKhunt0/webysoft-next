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
        <motion.div
          className="relative max-w-4xl mx-auto card-3d"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass rounded-xl md:rounded-2xl overflow-hidden border border-primary/20 shadow-2xl royal-border bg-gradient-to-br from-background/95 to-secondary/30 backdrop-blur-md">
            {/* Modern Header with Animated Dots */}
            <div className="relative bg-gradient-to-r from-secondary/80 to-primary/10 p-3 md:p-4 border-b border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="flex space-x-1.5 md:space-x-2">
                    <motion.div 
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  <div className="h-3 md:h-4 w-px bg-primary/30"></div>
                  <span className="text-xs font-medium text-foreground/60 hidden sm:block">Live Portfolio</span>
                </div>
                <div className="flex items-center space-x-1.5 md:space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-500 font-medium">Online</span>
                </div>
              </div>

              <div className="mt-2 md:mt-3 flex justify-center">
                <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-primary/20">
                  <span className="text-xs font-mono text-foreground/70">
                    <span className="text-primary font-semibold">webysoft</span>
                    .com
                    <span className="text-accent">/portfolio</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Projects Showcase */}
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="text-center">
                <motion.h3 
                  className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Latest Success Stories
                </motion.h3>
                <p className="text-xs md:text-sm text-foreground/70">Real projects, real results across multiple industries</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {showcaseItems.map((item, index) => (
                  <a 
                    key={item.id} 
                    href={item.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div 
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.03,
                        rotateY: 5,
                        z: 50
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="aspect-[4/3] rounded-lg md:rounded-xl border border-primary/30 relative overflow-hidden shadow-lg bg-gradient-to-br from-background to-secondary/30">
                        <img 
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                        {/* Category Badge */}
                        <div className="absolute top-2 md:top-3 left-2 md:left-3">
                          <span className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            {item.type}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-10">
                          <p className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-white/80 mb-2 line-clamp-2 hidden sm:block">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-accent font-medium">View Project</span>
                            <motion.div 
                              className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent/80 transition-colors"
                              whileHover={{ rotate: 45 }}
                            >
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl"></div>
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="mt-6 md:mt-8 text-center">
                <Link href="/portfolio">
                  <motion.button
                    className="relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg overflow-hidden group text-sm md:text-base"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Explore Full Portfolio</span>
                      <motion.svg 
                        className="w-3.5 h-3.5 md:w-4 md:h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative corner accents */}
          <motion.div
            className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-accent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-accent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          ></motion.div>
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