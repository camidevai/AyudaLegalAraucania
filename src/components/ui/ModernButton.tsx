import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'glass' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  href,
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  fullWidth = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-soft hover:shadow-glow focus:ring-primary-500 hover:from-primary-400 hover:to-primary-500',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-soft hover:shadow-medium focus:ring-secondary-500',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-soft hover:shadow-glow-accent focus:ring-accent-500',
    outline: 'border-2 border-primary-500 text-primary-500 bg-white/80 backdrop-blur-sm hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 focus:ring-white/50',
    gold: 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-soft hover:shadow-lg focus:ring-gold-500'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const buttonContent = (
    <>
      {loading && (
        <motion.div
          className="absolute inset-0 bg-white/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
      
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' || size === 'xl' ? 'w-6 h-6' : 'w-5 h-5'} mr-2`} />
      )}
      
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' || size === 'xl' ? 'w-6 h-6' : 'w-5 h-5'} ml-2`} />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default ModernButton;
