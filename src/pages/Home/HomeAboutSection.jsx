import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './HomeAboutSection.css';
import aboutBg from '../../assets/images/bluebg.jpg';

const HomeAboutSection = () => {
  // Text Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="home-about-section" 
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      
      {/* --- LAYER 1: PULSING BACKGROUND --- */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
        animate={{ 
          filter: [
            "brightness(0.6) contrast(1.1) saturate(1)", // Darker start
            "brightness(1.0) contrast(1.2) saturate(1.3)", // Glow
            "brightness(0.6) contrast(1.1) saturate(1)" // Back to Dark
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- LAYER 2: HOLOGRAPHIC SHEEN --- */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 25%, transparent 30%)',
          zIndex: 1, pointerEvents: 'none',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
      />

      {/* --- LAYER 3: DARK OVERLAY (Ensures readability) --- */}
      <div 
        className="overlay" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.6))', 
          zIndex: 2 
        }}
      ></div>

      {/* --- LAYER 4: CENTERED CONTENT --- */}
      <div className="about-container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div 
          className="about-content centered-layout" // Added class for centering
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Centered Orange Scan Line */}
          <motion.div 
            className="scan-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ margin: '0 auto 20px auto' }} // Force center
          />

          <motion.h4 className="section-tag" variants={itemVariants}>
            About Us
          </motion.h4>

          <motion.h2 className="section-title" variants={itemVariants}>
            Modern Web Development <br />
            for <span className="highlight-text">Visionary Brands</span>
          </motion.h2>

          <motion.p className="section-desc" variants={itemVariants}>
            TogetherTech is a premium digital agency dedicated to crafting high-performance 
            web experiences and custom software for local businesses. Built with 
            cutting-edge technology and cinematic design, we give companies a 
            powerful digital edge to outshine competition and scale efficiently.
          </motion.p>

          <motion.div className="btn-wrapper" variants={itemVariants}>
            <Link to="/about">
              <button className="learn-more-btn">
                Learn More <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;