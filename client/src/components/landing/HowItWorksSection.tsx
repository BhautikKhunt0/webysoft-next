import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { IoCodeSlashOutline, IoRocketOutline } from 'react-icons/io5';

const steps = [
  {
    number: 1,
    title: "Choose a Style",
    description: "Select from our templates or start from scratch with a custom design tailored to your brand.",
    icon: HiOutlineColorSwatch,
    color: "primary",
    gradient: "from-primary to-accent"
  },
  {
    number: 2,
    title: "We Build",
    description: "Our team crafts your pixel-perfect landing page with all the animations and integrations you need.",
    icon: IoCodeSlashOutline,
    color: "accent",
    gradient: "from-accent to-[#10B981]"
  },
  {
    number: 3,
    title: "You Launch",
    description: "Deploy your new landing page and start converting visitors into customers right away.",
    icon: IoRocketOutline,
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
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-secondary/50 to-background/20 -z-10"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-[5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 -z-5"></div>
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-60 -z-5"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            How It <span className="text-primary text-glow">Works</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A simple, streamlined process to get your high-converting landing page live.
          </p>
        </motion.div>
        
        {/* New Process Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20 last:mb-0`}
              >
                {/* Step Number - Large Circle */}
                <div className="flex-shrink-0 mb-8 md:mb-0 z-20">
                  <div className={`w-16 h-16 rounded-full ${colorClasses[step.color as keyof typeof colorClasses].bg} flex items-center justify-center border-2 ${colorClasses[step.color as keyof typeof colorClasses].border} shadow-lg relative`}>
                    <span className={`text-2xl font-bold ${colorClasses[step.color as keyof typeof colorClasses].text}`}>{step.number}</span>
                    {/* Radial glow effect */}
                    <div className={`absolute inset-0 rounded-full ${colorClasses[step.color as keyof typeof colorClasses].bg} opacity-40 blur-sm`}></div>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                  <GlassCard 
                    className="p-8 border border-white/10"
                    is3D={true}
                    borderGlow={step.color as 'primary' | 'accent' | 'green' | undefined}
                    animate={true}
                  >
                    <div className="flex items-start mb-6">
                      <div className={`w-14 h-14 ${colorClasses[step.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center mr-5 relative overflow-hidden group`}>
                        {/* Icon white overlay on hover */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                        
                        {/* React Icon */}
                        <step.icon className={`w-7 h-7 ${colorClasses[step.color as keyof typeof colorClasses].text}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                        <div className={`h-1 w-10 ${colorClasses[step.color as keyof typeof colorClasses].bg} rounded-full`}></div>
                      </div>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
