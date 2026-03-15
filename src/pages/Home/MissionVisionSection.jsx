import React from 'react';
import { motion } from 'framer-motion';
import missionIcon from '../../assets/images/arrow.png';
import visionIcon from '../../assets/images/uparrow.png';
import './MissionVisionSection.css';

const MissionVisionSection = () => {
  // 1. Entrance Animation (Slide up + Fade in)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Delay between the two cards appearing
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 2. Continuous Floating Animation for Icons
  const floatAnim = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="mission-vision-section">
      <div className="mv-container">
        <motion.div 
          className="mv-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
        >
            
            {/* Mission Card */}
            <motion.div className="mv-card" variants={cardVariants}>
              <motion.div className="icon-wrapper" animate={floatAnim}>
                <img src={missionIcon} alt="Our Mission" className="mv-icon" />
              </motion.div>
              
              <h3 className="mv-title">Our Mission</h3>
              
              <div className="mv-text">
                <p>
                  To bridge the digital gap for local entrepreneurs by providing elite-quality 
                  web development and software solutions at honest, accessible prices.
                </p>
                <p>
                  We aim to empower every business in our community with high-performance 
                  digital tools that drive growth, simplify operations, and command professional 
                  authority in the modern market.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div className="mv-card" variants={cardVariants}>
              <motion.div className="icon-wrapper" animate={floatAnim}>
                <img src={visionIcon} alt="Our Vision" className="mv-icon" />
              </motion.div>
              
              <h3 className="mv-title">Our Vision</h3>
              
              <div className="mv-text">
                <p>
                  To be the leading catalyst for Tamil Nadu's digital evolution, recognized for 
                  transforming traditional business ideas into world-class digital realities.
                </p>
                <p>
                  We envision a future where local talent and local businesses collaborate 
                  to create a self-sustaining digital ecosystem that competes on a global 
                  standard of excellence and innovation.
                </p>
              </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;