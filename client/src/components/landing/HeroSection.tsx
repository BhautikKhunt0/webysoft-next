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
          <div className="glass rounded-xl overflow-hidden border border-primary/20 shadow-2xl royal-border">
            <div className="bg-secondary p-3 border-b border-primary/20 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-background/50 rounded-full px-4 py-1 text-xs text-foreground/70">
                <span className="text-primary">www.</span>youramazingsite
                <span className="text-primary">.com</span>
              </div>
            </div>
            {/* Projects Showcase Section */}
            <div className="p-6 bg-gradient-to-br from-background/80 to-secondary/50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">Our Latest Projects</h3>
                <p className="text-sm text-foreground/70">Crafting digital excellence across industries</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {showcaseItems.map((item, index) => (
                  <Link key={item.id} href="/portfolio">
                    <motion.div 
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="aspect-video rounded-lg border border-primary/30 relative overflow-hidden">
                        <img 
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                          <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                          <p className="text-xs text-white/70 truncate">{item.type}</p>
                        </div>
                        <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/portfolio">
                  <motion.button
                    className="px-6 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Projects
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