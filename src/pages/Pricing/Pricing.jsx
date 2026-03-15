import React from 'react';
import { motion } from 'framer-motion';
import PlansSection from './PlansSection';
import './Pricing.css';

const Pricing = () => {

  // Animation variants for the orange graphic
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%", 
      transition: { duration: 0.8, ease: "circOut", delay: 0.2 } 
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { type: "spring", stiffness: 300, damping: 20 } 
    }
  };

  return (
    <motion.div 
      className="pricing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="pricing-container">
        
        {/* --- START OF NEW HEADER DESIGN --- */}
        <div className="pricing-hero">
          {/* 1. Main Title */}
          <motion.h1 
            className="hero-ttitle"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Pricing
          </motion.h1>

          {/* 2. The Orange Graphic (Dot + Line) */}
          <div className="hero-graphic-wrapper">
            <motion.div 
              className="hero-dot" 
              variants={dotVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.div 
              className="hero-line" 
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />
          </div>

          {/* 3. Breadcrumb */}
          <motion.p 
            className="hero-breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
           
          </motion.p>

          {/* 4. Subheadline */}
          <motion.h2 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Find the perfect digital partnership <br /> that fits your vision and budget
          </motion.h2>
        </div>
        {/* --- END OF NEW HEADER DESIGN --- */}

        {/* Cards Section */}
        <PlansSection />
        
      </div>
    </motion.div>
  );
};

export default Pricing;