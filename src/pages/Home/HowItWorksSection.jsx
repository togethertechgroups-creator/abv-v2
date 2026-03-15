import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorksSection.css';

// --- CHANGE 1: Import your second image here ---
// Make sure this file exists in your folder!
import securityImg from '../../assets/images/hiw_growth.png'; 
import operationsImg from '../../assets/images/hiw_advantage.png'; 

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [isAnimating, setIsAnimating] = useState(false);

  const content = {
    'process': {
      label: 'How We Help You Grow',
      mainTitle: <>A Simple, Transparent 3-Step <br /> Process for Your Digital Success</>,
      subDescription: 'We help local businesses get online quickly and effectively with a proven methodology tailored for growth.',
      cardTitle: 'Growth Strategy',
      
      // Image for Tab 1
      image: securityImg, 
      
      steps: [
        {
          title: 'Step 1: Discovery:',
          description: 'We listen to your needs and understand your business goals, target audience, and current digital presence.'
        },
        {
          title: 'Step 2: Design:',
          description: 'We create beautiful, mobile-optimized website designs tailored to attract local customers and build trust.'
        },
        {
          title: 'Step 3: Launch:',
          description: 'Your optimized site goes live. We ensure it\'s fast, SEO-friendly, and provide support to fuel your growth.'
        },
        {
          title: 'Continuous Support:',
          description: 'We stay by your side after launch, ensuring your website continues to perform and scale with your business.'
        }
      ]
    },
    'features': {
      label: 'Why Choose TogetherTech',
      mainTitle: <>Premium Design Meets <br /> Performance-Driven Results</>,
      subDescription: 'Our websites aren\'t just pretty—they are built to convert visitors into loyal customers.',
      cardTitle: 'Core Advantages',
      
      // --- CHANGE 2: Assign the second image here ---
      image: operationsImg, 
      
      steps: [
        {
          title: 'Conversion Focused:',
          description: 'Every element is strategically placed to guide users towards booking or contacting you.'
        },
        {
          title: 'Blazing Fast Speed:',
          description: 'We optimize every kilobyte to ensure your site loads instantly on all devices and networks.'
        },
        {
          title: 'SEO Optimized:',
          description: 'Rank higher on Google and get found by local customers looking for your specific services.'
        },
        {
          title: 'Dedicated Support:',
          description: 'Experience peace of mind with our reliable maintenance and world-class technical support.'
        }
      ]
    }
  };

  const currentData = content[activeTab];


  // --- ANIMATION VARIANTS ---
  // --- UPDATED ANIMATION VARIANTS (SMOOTHER) ---
  const shutterVariants = {
    initial: { x: "-100%" },
    animate: { 
      x: "100%", 
      transition: { 
        duration: 0.6, 
        ease: "easeInOut", // Standard smooth easing prevents the "stuck" feel
      } 
    },
    exit: { x: "100%" } // Ensures it stays off-screen when finished
  };

  const textRevealVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } 
    }
  };

  const handleTabChange = (tab) => {
    if (activeTab === tab || isAnimating) return;
    setIsAnimating(true);
    setActiveTab(tab);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="hiw-section-wrapper">
      <div className="hiw-main-container">
        
        {/* 1. Header Layout */}
        <div className="hiw-header-layout">
          <div className="header-text-block">
             <h2 className="hiw-grand-title">
               <span className="outline-text">SYSTEM</span> <br /> 
               <span className="solid-text">OVERVIEW</span>
             </h2>
          </div>
          
          {/* 2. Liquid Tabs */}
          <div className="hiw-liquid-tabs">
            {Object.keys(content).map((key) => (
              <button 
                key={key}
                className={`liquid-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => handleTabChange(key)}
              >
                {activeTab === key && (
                  <motion.div 
                    layoutId="activeTabBackground" 
                    className="liquid-bg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="tab-text">{content[key].label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. The Cinematic Stage */}
        <div className="hiw-cinema-stage">
          
          {/* THE WIPING SHUTTER */}
          <AnimatePresence mode='wait'>
            <motion.div 
              key={activeTab} 
              className="hiw-shutter"
              variants={shutterVariants}
              initial="initial"
              animate="animate"
            />
          </AnimatePresence>

          <div className="hiw-stage-content">
            
            {/* LEFT: Text Panel */}
            <div className="hiw-text-panel">
               <AnimatePresence mode='wait'>
                <motion.div 
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  <div className="panel-header">
                    <motion.h3 variants={textRevealVariants} className="panel-title">
                      {currentData.mainTitle}
                    </motion.h3>
                    <motion.p variants={textRevealVariants} className="panel-desc">
                      {currentData.subDescription}
                    </motion.p>
                  </div>
                  
                  <div className="panel-steps">
                    {currentData.steps.map((step, idx) => (
                      <motion.div key={idx} className="step-item" variants={textRevealVariants}>
                        <div className="step-number">0{idx + 1}</div>
                        <div className="step-info">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
               </AnimatePresence>
            </div>

            {/* RIGHT: Image Panel */}
            <div className="hiw-image-panel">
               <AnimatePresence mode='wait'>
                 <motion.img 
                    // This key ensures React treats it as a NEW image when tab changes
                    key={activeTab} 
                    
                    // This pulls the specific image from the content object above
                    src={currentData.image} 
                    
                    alt="Dashboard Visual"
                    className="panel-img"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      transition: { delay: 0.4, duration: 0.8 } 
                    }}
                    exit={{ opacity: 0 }}
                 />
               </AnimatePresence>
               
               {/* Decorative Overlays */}
               <div className="scanline-overlay"></div>
               <div className="corner-bracket top-left"></div>
               <div className="corner-bracket bottom-right"></div>
               
               {/* Badge */}
               <div className="panel-badge">
                 {currentData.cardTitle}
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;