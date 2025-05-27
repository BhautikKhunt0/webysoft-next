import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Shield, Award, Building, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    company: "Fortune 500 Financial Services",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "WebySoft's enterprise-grade solutions transformed our digital infrastructure. Their ISO-certified processes and 24/7 support gave us the confidence to scale globally. ROI exceeded expectations by 300%.",
    rating: 5,
    verified: true,
    industry: "Financial Services"
  },
  {
    name: "Michael Thompson",
    role: "Head of Digital Strategy",
    company: "Leading Healthcare Corporation",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Security and compliance were our top priorities. WebySoft delivered bank-level encryption and maintained our HIPAA compliance throughout the project. Their professional team exceeded all expectations.",
    rating: 5,
    verified: true,
    industry: "Healthcare"
  },
  {
    name: "Amanda Chen",
    role: "VP of Operations",
    company: "Global Manufacturing Leader",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "The dedicated project management and enterprise support made this the smoothest digital transformation we've ever experienced. WebySoft's certified excellence shows in every detail.",
    rating: 5,
    verified: true,
    industry: "Manufacturing"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See why Fortune 500 companies and growing enterprises trust WebySoft with their most critical digital initiatives.
          </motion.p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div className="bg-blue-500/20 backdrop-blur border border-blue-500/30 rounded-full p-4">
                    <Quote className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6 pt-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">Verified Review</span>
                  <Shield className="w-4 h-4 text-green-400 ml-1" />
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-blue-500/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500/20 backdrop-blur border border-blue-500/30 rounded-full p-1">
                      <Building className="w-3 h-3 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                    <p className="text-sm text-blue-400">{testimonials[activeIndex].company}</p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <div className="bg-slate-700/50 backdrop-blur border border-slate-600/50 rounded-lg px-4 py-2">
                      <span className="text-xs text-gray-400">Industry</span>
                      <p className="text-sm font-medium text-gray-300">{testimonials[activeIndex].industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              className="p-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-blue-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">99.8%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">500+</div>
            <div className="text-sm text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">24/7</div>
            <div className="text-sm text-gray-400">Expert Support</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">A+</div>
            <div className="text-sm text-gray-400">Security Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}