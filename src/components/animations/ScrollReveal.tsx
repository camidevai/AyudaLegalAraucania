import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = '',
  once = true,
  threshold = 0.1
}) => {
  const getVariants = () => {
    const baseVariants = {
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            y: 0
          }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            y: 0
          }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            x: 0
          }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            x: 0
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            scale: 1
          }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          ...baseVariants
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            y: 0
          }
        };
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation
interface StaggeredRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
  direction = 'up'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'scale' ? 0.8 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollReveal;
