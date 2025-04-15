import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Random particle generation and animation will be handled with simple animated divs
  // A real production version might use Three.js or a dedicated particle library
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      ref={containerRef}
      aria-hidden="true"
    >
      {/* Background glow elements */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '25%', left: '25%' }}
      />
      
      <motion.div 
        className="absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ bottom: '30%', right: '30%' }}
      />
      
      <motion.div 
        className="absolute w-48 h-48 rounded-full bg-[#10B981]/10 blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ top: '50%', right: '25%' }}
      />
      
      {/* Small floating particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-white/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
