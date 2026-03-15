import React from 'react';
import { motion } from 'framer-motion';
import mapImg from '../../assets/images/map.png';
import './ClockingPointSection.css';

const ClockingPointSection = () => {
  // 1. Text Entry Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 2. Floating Card Animation
  const floatAnim = {
    y: [0, -12, 0],
    rotate: [0, 1, 0], // Subtle rotation
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // 3. Sonar Ripple Animation (Geofencing Effect)
  const rippleAnim = {
    scale: [1, 3],
    opacity: [0.6, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut"
    }
  };

  return (
    <section className="cp-section">
      <div className="cp-container">
        
        {/* LEFT: SPECTACULAR VISUALS */}
        <motion.div 
          className="cp-visual-stage"
          initial={{ opacity: 0, x: -100, rotateY: -30 }} // 3D Entrance
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Phone Container */}
          <div className="phone-frame">
            <img src={mapImg} alt="Map Interface" className="cp-phone-img" />
            
            {/* ANIMATION LAYER: Live Scanning Effects */}
            <div className="screen-overlay">
              
              {/* A. Vertical Scan Line */}
              <motion.div 
                className="scan-line"
                animate={{ top: ["10%", "80%", "10%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* B. GPS Pin & Sonar Ripples (Positioned at map center roughly) */}
              <div className="gps-target" style={{ top: '38%', left: '55%' }}>
                <div className="pin-dot"></div>
                {/* Three Ripple Layers */}
                <motion.div className="ripple r1" animate={rippleAnim} />
                <motion.div className="ripple r2" animate={rippleAnim} transition={{ delay: 0.6, duration: 2, repeat: Infinity }} />
                <motion.div className="ripple r3" animate={rippleAnim} transition={{ delay: 1.2, duration: 2, repeat: Infinity }} />
              </div>

            </div>
          </div>

          {/* Floating Info Card */}
          <motion.div 
            className="cp-float-card"
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            animate={floatAnim}
          >
            <div className="cp-card-header">
              <span className="cp-card-title">Live Project Tracking</span>
            </div>
            <div className="cp-card-body">
              <div className="cp-skeleton-bar w-70"></div>
              <div className="cp-skeleton-bar w-90"></div>
              <ul className="cp-card-list">
                <li>Real-time build status</li>
                <li>Design milestone reviews</li>
                <li>Staging environment access</li>
                <li>Deployment countdown</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>


        {/* RIGHT: CONTENT */}
        <motion.div 
          className="cp-content-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h4 className="cp-section-tag" variants={textVariants}>
            Transparency & Speed
          </motion.h4>
          
          <div className="cp-text-block">
            <motion.h3 className="cp-block-title" variants={textVariants}>
              Real-Time Development Updates
            </motion.h3>
            <motion.p className="cp-block-desc" variants={textVariants}>
              Watch your project come to life. We provide access to live staging 
              environments where you can see every component, animation, and 
              feature as it's being built and optimized.
            </motion.p>
          </div>

          <div className="cp-text-block">
            <motion.h3 className="cp-block-title" variants={textVariants}>
              30-Day Launch Guarantee
            </motion.h3>
            <motion.p className="cp-block-desc" variants={textVariants}>
              We value momentum. Our rapid deployment pipeline ensures your 
              business goes digital without the traditional wait times, delivering 
              world-class results in just 4 weeks.
            </motion.p>
          </div>

          <div className="cp-text-block">
            <motion.h3 className="cp-block-title" variants={textVariants}>
              Strict Quality Assurance
            </motion.h3>
            <motion.p className="cp-block-desc" variants={textVariants}>
              Every line of code undergoes rigorous testing for speed, security, 
              and cross-browser compatibility before it ever touches your production 
              environment.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClockingPointSection;
