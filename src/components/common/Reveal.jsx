import React from 'react';
import { motion } from 'framer-motion';

// GLOBAL SETTINGS
const globalTransition = {
  type: "spring",
  stiffness: 260, // Fast
  damping: 20,    // Smooth stop
  mass: 0.5       // Light
};

const globalViewport = {
  once: false,    // <--- THIS FIXES THE SCROLL UP ISSUE
  amount: 0.2     // Triggers when 20% visible
};

const Reveal = ({ 
  children, 
  variants, // Pass your custom Hologram/Card variants here
  className = "",
  style = {},
  delay = 0 
}) => {
  
  // Default Fade Up if no variants provided
  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={globalViewport} // Enforces re-animation globally
      transition={{ ...globalTransition, delay }} // Enforces speed globally
      variants={variants || defaultVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;