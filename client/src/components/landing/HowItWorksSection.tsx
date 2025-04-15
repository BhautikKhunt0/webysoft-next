import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const steps = [
  {
    number: 1,
    title: "Choose a Style",
    description: "Select from our templates or start from scratch with a custom design tailored to your brand.",
    icon: "ri-palette-line",
    color: "primary",
    gradient: "from-primary to-accent"
  },
  {
    number: 2,
    title: "We Build",
    description: "Our team crafts your pixel-perfect landing page with all the animations and integrations you need.",
    icon: "ri-code-box-line",
    color: "accent",
    gradient: "from-accent to-[#10B981]"
  },
  {
    number: 3,
    title: "You Launch",
    description: "Deploy your new landing page and start converting visitors into customers right away.",
    icon: "ri-rocket-2-line",
    color: "green",
    gradient: "from-[#10B981] to-[#10B981]"
  }
];

// A mapping for the color classes
const colorClasses = {
  primary: {
    bg: "bg-primary/20",
    text: "text-primary",
    border: "border-primary/80",
    shadow: "shadow-primary/50"
  },
  accent: {
    bg: "bg-accent/20",
    text: "text-accent",
    border: "border-accent/80",
    shadow: "shadow-accent/50"
  },
  green: {
    bg: "bg-[#10B981]/20",
    text: "text-[#10B981]",
    border: "border-[#10B981]/80",
    shadow: "shadow-[#10B981]/50"
  }
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          How It <span className="text-primary text-glow">Works</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A simple, streamlined process to get your high-converting landing page live.
        </motion.p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div className="relative" key={index}>
                <div 
                  className={`absolute -top-4 -left-4 w-8 h-8 ${colorClasses[step.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center z-20 border-2 ${colorClasses[step.color as keyof typeof colorClasses].border} ${colorClasses[step.color as keyof typeof colorClasses].shadow}`}
                >
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <motion.div 
                    className={`hidden md:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} z-10`}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                )}
                
                <GlassCard 
                  className="h-full mt-6 relative z-20 p-8"
                  is3D={true}
                  delay={0.2 * index}
                >
                  <div className={`w-16 h-16 ${colorClasses[step.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-6`}>
                    <i className={`${step.icon} text-3xl ${colorClasses[step.color as keyof typeof colorClasses].text}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
