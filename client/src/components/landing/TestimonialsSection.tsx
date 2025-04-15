import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, Elevate SaaS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "WebySoft transformed our basic landing page into a conversion machine. Sign-ups increased by 58% in the first month alone. The animations and design details make us look like a much bigger company."
  },
  {
    name: "Michael Thompson",
    role: "Marketing Director, TechFlow",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Our WebySoft landing page loads in under 2 seconds and has a 90+ PageSpeed score despite all the beautiful animations. The attention to detail and conversion-focused design has made a huge difference in our ad campaigns."
  },
  {
    name: "Amanda Chen",
    role: "CEO, Bright Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Working with WebySoft has been a game-changer for our product launches. Their landing pages don't just look impressive—they actually drive results. We've seen higher engagement rates and better lead quality."
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          What Our <span className="text-primary text-glow">Clients</span> Say
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Don't just take our word for it. Here's what others are saying about WebySoft.
        </motion.p>
        
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 gap-8" key={activeIndex}>
              <motion.div
                key={`testimonial-${activeIndex}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard is3D={true} className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonials[activeIndex].name}</div>
                      <div className="text-sm text-foreground/60">{testimonials[activeIndex].role}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-500"></i>
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 italic">{testimonials[activeIndex].quote}</p>
                </GlassCard>
              </motion.div>
              
              <motion.div
                key={`testimonial-${(activeIndex + 1) % testimonials.length}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard is3D={true} className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[(activeIndex + 1) % testimonials.length].image}
                        alt={testimonials[(activeIndex + 1) % testimonials.length].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonials[(activeIndex + 1) % testimonials.length].name}</div>
                      <div className="text-sm text-foreground/60">{testimonials[(activeIndex + 1) % testimonials.length].role}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-500"></i>
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 italic">{testimonials[(activeIndex + 1) % testimonials.length].quote}</p>
                </GlassCard>
              </motion.div>
            </div>
          </AnimatePresence>
          
          {/* Testimonial Navigation */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-white/30'} transition-colors`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow navigation for larger screens */}
          <div className="hidden md:block">
            <button 
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button 
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
