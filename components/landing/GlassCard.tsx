import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  is3D?: boolean;
  borderGlow?: 'primary' | 'accent' | 'green' | 'red' | 'none';
  delay?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function GlassCard({ 
  children, 
  className, 
  animate = true, 
  is3D = false, 
  borderGlow = 'none',
  delay = 0
}: GlassCardProps) {
  const borderClasses = {
    'primary': 'border-primary/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]',
    'accent': 'border-accent/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]',
    'green': 'border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    'red': 'border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]',
    'none': 'border-white/10'
  };
  
  const Card = animate ? motion.div : 'div';
  
  return (
    <Card
      className={cn(
        'glass rounded-xl overflow-hidden',
        is3D && 'card-3d',
        borderClasses[borderGlow],
        className
      )}
      {...(animate ? {
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, delay }
      } : {})}
    >
      {children}
    </Card>
  );
}
