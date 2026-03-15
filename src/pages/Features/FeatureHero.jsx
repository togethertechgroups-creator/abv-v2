import React from 'react';
import { motion } from 'framer-motion';
import SmokeBackground from '../../components/common/SmokeBackground'; 
import './FeatureHero.css';

const FeatureHero = () => {
  // --- VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation for the Orange Line growing
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%", // Grows to fill the container space (or set fixed px)
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } 
    }
  };

  // Animation for the Dot popping in
  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.4 } 
    }
  };

  return (
    <section className="feature-hero-section">
      
      {/* 1. BACKGROUND */}
      <SmokeBackground />

      {/* 2. CONTENT */}
      <div className="heroo-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Wrapper to group Title + Line together for alignment */}
          <div className="title-block">
            <motion.h1 className="herro-title" variants={textVariants}>
              Features
            </motion.h1>
            
            {/* THE ORANGE DOT & LINE ANIMATION */}
            <div className="hero-decoration">
              <motion.span className="hero-dot" variants={dotVariants}></motion.span>
              <motion.span className="hero-line" variants={lineVariants}></motion.span>
            </div>
          </div>
          
          <motion.p className="breadcrumb" variants={textVariants}>
            
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHero;