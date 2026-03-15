import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8 
      }}
      style={{ width: "100%", overflow: "hidden" }} // Prevents horizontal scrollbars during animation
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;