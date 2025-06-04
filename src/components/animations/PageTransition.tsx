import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

const overlayVariants = {
  initial: {
    scaleY: 0,
    transformOrigin: "bottom"
  },
  animate: {
    scaleY: 1,
    transformOrigin: "bottom"
  },
  exit: {
    scaleY: 0,
    transformOrigin: "top"
  }
};

const overlayTransition = {
  duration: 0.3,
  ease: "easeInOut"
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative"
      >
        {/* Overlay animation */}
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-primary-500 to-accent-500 z-50 pointer-events-none"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={overlayTransition}
        />
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
