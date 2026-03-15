import React from 'react';
import { motion } from 'framer-motion';
// NOTE: Ensure this image path is correct
import heroBg from '../../assets/images/contacthero.gif'; 
import './ContactHero.css';

const ContactHero = () => {
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

  // Animation: Line grows from 0 to 100%
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%", 
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } 
    }
  };

  // Animation: Dot pops in
  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.4 } 
    }
  };

  return (
    <section className="contact-hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      
      {/* Optional: White/Yellow tint overlay if image is too busy */}
      {/* <div className="hero-overlay"></div> */}

      <div className="herooo-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* WRAPPER: Keeps Title & Line aligned to the left of each other */}
          <div className="title-block">
            <motion.h1 className="hero-title" variants={textVariants}>
              Let's Build Something <br /> Together
            </motion.h1>
            
            {/* DECORATION: Dot + Growing Line */}
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

export default ContactHero;