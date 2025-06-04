import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'gradient' | 'bordered';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  href?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md',
  rounded = 'xl',
  shadow = 'md',
  onClick,
  href
}) => {
  const baseClasses = 'relative overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white/80 backdrop-blur-sm border border-white/20',
    strong: 'bg-white/20 backdrop-blur-md border border-white/30',
    gradient: 'bg-gradient-to-br from-white/90 to-primary-50/50 border border-primary-100/50',
    bordered: 'bg-white/70 backdrop-blur-sm border-2 border-primary-200/50'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const roundedClasses = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    '2xl': 'rounded-4xl',
    '3xl': 'rounded-5xl'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-soft',
    lg: 'shadow-medium',
    xl: 'shadow-large'
  };

  const hoverClasses = hover 
    ? 'hover:shadow-medium hover:-translate-y-1 hover:bg-white/90 hover:border-white/40' 
    : '';

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;

  const motionProps = hover ? {
    whileHover: { 
      y: -4,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    whileTap: onClick ? { scale: 0.98 } : {}
  } : {};

  const cardContent = (
    <>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover effect overlay */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${cardClasses} block cursor-pointer`}
        {...motionProps}
      >
        {cardContent}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.div
        onClick={onClick}
        className={`${cardClasses} cursor-pointer`}
        {...motionProps}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      {...motionProps}
    >
      {cardContent}
    </motion.div>
  );
};

export default GlassCard;
