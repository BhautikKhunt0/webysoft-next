import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Shield, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const [location] = useLocation();
  const isPortfolioPage = location === '/portfolio';
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Helper function to handle navigation
  const navigateToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (isPortfolioPage) {
      // From portfolio to home section
      window.location.href = `/#${sectionId}`;
    } else {
      // Already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-white font-bold text-2xl mb-6 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Weby<span className="text-blue-400">Soft</span>
              </span>
            </motion.button>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
              Transform your digital presence with enterprise-grade solutions. We deliver innovative web experiences that drive business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+91 88499 90393</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">enterprise@webysoft.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Surat & Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'Web Development', href: '#features' },
                { label: 'Mobile Apps', href: '#features' },
                { label: 'E-commerce', href: '#features' },
                { label: 'Digital Marketing', href: '#features' },
                { label: 'SEO Optimization', href: '#features' },
                { label: 'Cloud Solutions', href: '#features' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => navigateToSection(e, 'features')}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Portfolio', href: '/portfolio', isLink: true },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => navigateToSection(e, item.href.slice(1))}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'FAQ', href: '#faq' },
                { label: 'Support', href: '#contact' },
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Terms of Service', href: '#terms' },
                { label: 'Cookie Policy', href: '#cookies' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaWhatsapp, href: 'https://wa.me/918849990393', color: 'text-green-400 hover:text-green-300' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/company/webysoft', color: 'text-blue-400 hover:text-blue-300' },
                  { icon: FaTwitter, href: 'https://twitter.com/webysoft', color: 'text-blue-400 hover:text-blue-300' },
                  { icon: FaGithub, href: 'https://github.com/webysoft', color: 'text-gray-400 hover:text-gray-300' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg ${social.color} transition-all duration-300 hover:bg-slate-700/50 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-400 text-sm">
                © 2024 WebySoft. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Proudly serving clients worldwide</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="text-sm text-gray-400">
                Made with ❤️ in India
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest updates on our services, industry insights, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}