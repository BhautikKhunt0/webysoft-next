import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                {/* Project Card 1 - E-commerce */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-primary/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="z-10 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-white">E-Commerce</p>
                    </div>
                  </div>
                </motion.div>

                {/* Project Card 2 - Service Business */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg border border-accent/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="z-10 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-white">Services</p>
                    </div>
                  </div>
                </motion.div>

                {/* Project Card 3 - Local Business */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="z-10 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-white">Local Shop</p>
                    </div>
                  </div>
                </motion.div>

                {/* Project Card 4 - Academy */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="z-10 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-purple-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-white">Academy</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-6 text-center">
                <motion.button
                  className="px-6 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("portfolio")}
                >
                  View All Projects
                </motion.button>
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