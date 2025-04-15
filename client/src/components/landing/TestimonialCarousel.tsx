import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, Elevate SaaS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "WebySoft transformed our basic landing page into a conversion machine. Sign-ups increased by 58% in the first month alone. The animations and design details make us look like a much bigger company.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Marketing Director, TechFlow",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Our WebySoft landing page loads in under 2 seconds and has a 90+ PageSpeed score despite all the beautiful animations. The attention to detail and conversion-focused design has made a huge difference in our ad campaigns.",
    rating: 5
  },
  {
    id: 3,
    name: "Amanda Chen",
    role: "CEO, Bright Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Working with WebySoft has been a game-changer for our product launches. Their landing pages don't just look impressive—they actually drive results. We've seen higher engagement rates and better lead quality.",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "CTO, NextGen Apps",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "The interactive elements WebySoft added to our landing page have completely transformed our user experience. Our bounce rate dropped by 35% and conversion rates are through the roof. Truly exceptional work!",
    rating: 5
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Head of Growth, Spark Digital",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "I've worked with many web design agencies, but WebySoft stands out. They understand that beautiful design must also perform. Our new landing page isn't just stunning—it's delivering real business results.",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > 50) {
      // Swipe threshold of 50px
      if (diffX > 0) {
        nextTestimonial(); // Swipe left
      } else {
        prevTestimonial(); // Swipe right
      }
    }
  };
  
  // Autoplay functionality
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000); // Change slide every 8 seconds
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  return (
    <div className="py-12 my-8">
      <div className="max-w-6xl mx-auto relative">
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="w-full"
            >
              <GlassCard is3D={true} className="p-8 md:p-10 text-center mx-auto max-w-4xl border border-white/10">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/30">
                  <img 
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-500 text-xl mx-0.5"></i>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{testimonials[current].name}</h3>
                <p className="text-foreground/60 mb-6">{testimonials[current].role}</p>
                
                <div className="text-xl italic mb-6 relative">
                  <i className="ri-double-quotes-l absolute -top-6 -left-6 text-4xl text-primary/30"></i>
                  <p className="text-foreground/90">"{testimonials[current].quote}"</p>
                  <i className="ri-double-quotes-r absolute -bottom-6 -right-6 text-4xl text-primary/30"></i>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevTestimonial}
          className="absolute top-1/2 -left-12 md:-left-16 transform -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors focus:outline-none z-10"
          aria-label="Previous testimonial"
        >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="absolute top-1/2 -right-12 md:-right-16 transform -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors focus:outline-none z-10"
          aria-label="Next testimonial"
        >
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </button>
        
        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? 'bg-primary' : 'bg-gray-500/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}