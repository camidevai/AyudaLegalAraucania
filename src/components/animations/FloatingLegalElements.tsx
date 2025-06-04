import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Gavel, BookOpen, Building2, Shield, Award } from 'lucide-react';

interface FloatingElementProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  size?: 'sm' | 'md' | 'lg';
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  icon, 
  className = '', 
  delay = 0, 
  duration = 6,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 0.6, 0.6, 0],
        y: [20, -20, -20, 20],
        rotate: [0, 5, -5, 0],
        scale: [0.8, 1, 1, 0.8]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full flex items-center justify-center text-primary-300/40 hover:text-primary-400/60 transition-colors duration-300">
        {icon}
      </div>
    </motion.div>
  );
};

const FloatingLegalElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Scales of Justice */}
      <FloatingElement
        icon={<Scale className="w-full h-full" />}
        className="top-20 left-10"
        delay={0}
        duration={8}
        size="lg"
      />
      
      <FloatingElement
        icon={<Scale className="w-full h-full" />}
        className="top-1/3 right-20"
        delay={3}
        duration={10}
        size="md"
      />

      {/* Gavels */}
      <FloatingElement
        icon={<Gavel className="w-full h-full" />}
        className="top-1/2 left-1/4"
        delay={1.5}
        duration={7}
        size="md"
      />

      <FloatingElement
        icon={<Gavel className="w-full h-full" />}
        className="bottom-1/3 right-10"
        delay={4}
        duration={9}
        size="sm"
      />

      {/* Law Books */}
      <FloatingElement
        icon={<BookOpen className="w-full h-full" />}
        className="top-2/3 left-16"
        delay={2}
        duration={6}
        size="md"
      />

      <FloatingElement
        icon={<BookOpen className="w-full h-full" />}
        className="top-1/4 right-1/3"
        delay={5}
        duration={8}
        size="sm"
      />

      {/* Classical Buildings */}
      <FloatingElement
        icon={<Building2 className="w-full h-full" />}
        className="bottom-20 left-1/3"
        delay={2.5}
        duration={11}
        size="lg"
      />

      <FloatingElement
        icon={<Building2 className="w-full h-full" />}
        className="top-1/5 left-1/2"
        delay={6}
        duration={7}
        size="sm"
      />

      {/* Shields */}
      <FloatingElement
        icon={<Shield className="w-full h-full" />}
        className="bottom-1/4 right-1/4"
        delay={3.5}
        duration={9}
        size="md"
      />

      <FloatingElement
        icon={<Shield className="w-full h-full" />}
        className="top-3/4 left-20"
        delay={1}
        duration={8}
        size="sm"
      />

      {/* Awards/Certificates */}
      <FloatingElement
        icon={<Award className="w-full h-full" />}
        className="bottom-1/2 right-16"
        delay={4.5}
        duration={10}
        size="md"
      />

      <FloatingElement
        icon={<Award className="w-full h-full" />}
        className="top-1/6 left-1/5"
        delay={7}
        duration={6}
        size="sm"
      />

      {/* Additional smaller elements for richness */}
      <FloatingElement
        icon={<Scale className="w-full h-full" />}
        className="bottom-10 left-1/2"
        delay={8}
        duration={12}
        size="sm"
      />

      <FloatingElement
        icon={<Gavel className="w-full h-full" />}
        className="top-1/8 right-1/5"
        delay={9}
        duration={7}
        size="sm"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
    </div>
  );
};

export default FloatingLegalElements;
