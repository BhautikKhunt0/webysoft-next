import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0" aria-hidden="true">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/30 blur-3xl"
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
          className="absolute w-96 h-96 rounded-full bg-accent/30 blur-3xl"
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
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Something <span className="text-glow text-primary">Amazing?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start creating a landing page that converts visitors into customers and elevates your brand.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="#get-started" 
              className="bg-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center"
            >
              <span>Let's Talk</span>
              <i className="ri-message-3-line ml-2"></i>
            </a>
            <a 
              href="#templates" 
              className="bg-secondary border border-primary/30 hover:border-primary/50 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <span>See Templates</span>
              <i className="ri-gallery-line ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
