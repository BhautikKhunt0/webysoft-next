import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { 
  HiOutlineChartBar, 
  HiOutlineDeviceMobile, 
  HiOutlineSearch,
  HiOutlineSparkles 
} from 'react-icons/hi';
import { 
  IoRocketOutline, 
  IoCodeSlashOutline 
} from 'react-icons/io5';

const features = [
  {
    icon: HiOutlineChartBar,
    color: "primary",
    title: "Conversion-Optimized",
    description: "Strategic CTA placement and user flows designed to maximize conversions at every step."
  },
  {
    icon: HiOutlineDeviceMobile,
    color: "accent",
    title: "Mobile Responsive",
    description: "Pixel-perfect across all devices, from desktop to mobile, ensuring no visitor is left behind."
  },
  {
    icon: HiOutlineSparkles,
    color: "cyan",
    title: "Motion-Enhanced",
    description: "Subtle animations and micro-interactions that guide attention and elevate the experience."
  },
  {
    icon: HiOutlineSearch,
    color: "green",
    title: "SEO Ready",
    description: "Built with search engines in mind, helping your page rank and drive organic traffic."
  },
  {
    icon: IoRocketOutline,
    color: "primary",
    title: "Fast Loading",
    description: "Optimized assets and code to ensure lightning-fast load times and smooth performance."
  },
  {
    icon: IoCodeSlashOutline,
    color: "accent",
    title: "Easy to Integrate",
    description: "Simple to connect with your existing tools, from CMS to analytics and marketing platforms."
  }
];

// A mapping for the color classes
const colorClasses = {
  primary: {
    bg: "bg-primary/20",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/20",
    text: "text-accent",
  },
  cyan: {
    bg: "bg-[#06B6D4]/20",
    text: "text-[#06B6D4]",
  },
  green: {
    bg: "bg-[#10B981]/20",
    text: "text-[#10B981]",
  }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Designed to <span className="text-primary text-glow">Perform</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Every element of our landing pages is crafted with performance and conversion in mind.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <GlassCard 
              key={index} 
              is3D={true}
              delay={0.1 * index}
              className="p-8 border border-white/10"
            >
              <div className={`w-14 h-14 ${colorClasses[feature.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-6 relative overflow-hidden group transition-all duration-300 hover:scale-105`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-lg transition-opacity duration-300"></div>
                <feature.icon className={`w-7 h-7 ${colorClasses[feature.color as keyof typeof colorClasses].text} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
