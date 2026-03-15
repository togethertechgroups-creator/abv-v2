import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Smartphone, ShieldCheck } from 'lucide-react';
import './MissionVisionValuesSection.css';

// --- IMPORT YOUR IMAGES HERE ---
import missionImg from '../../assets/images/mission_3d.png';
import visionImg from '../../assets/images/vision_3d.png'; // Fixed typo in your filename if needed
import valuesImg from '../../assets/images/values_3d.png';

const MissionVisionValuesSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const data = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Target size={48} />,
      text: "To bridge the digital gap for local entrepreneurs by providing elite-quality web development at honest, accessible prices.",
      image: missionImg 
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <Smartphone size={48} />,
      text: "To be the leading catalyst for Tamil Nadu's digital evolution, turning local business ideas into world-class realities.",
      image: visionImg 
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: <ShieldCheck size={48} />,
      text: "We deliver clear, high-performance digital solutions with cinematic design that boosts credibility and local growth.",
      image: valuesImg 
    }
  ];

  return (
    <section className="mvv-section">
      <div className="mvv-container">
        <div className="mvv-grid">
          {data.map((item) => {
            const isActive = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                className={`mvv-card ${isActive ? 'active' : ''}`}
                
                // --- INTERACTION LOGIC ---
                // 1. Reveal on Hover
                onMouseEnter={() => setActiveCard(item.id)}
                // 2. Hide on Mouse Leave
                onMouseLeave={() => setActiveCard(null)}
                // 3. Keep Click for Touch Devices/Mobile
                onClick={() => setActiveCard(isActive ? null : item.id)}
                
                layout
                transition={{ duration: 0.5, type: "spring" }}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* --- 1. BASE IMAGE LAYER --- */}
                <div className="mvv-bg-image">
                    <img src={item.image} alt={item.title} />
                </div>

                {/* --- 2. BLUE OVERLAY (Tint) --- */}
                <div className="mvv-bg-blue"></div>
                
                {/* --- 3. ORANGE REVEAL LAYER --- */}
                <motion.div 
                  className="mvv-bg-orange"
                  initial={false}
                  animate={{ 
                    clipPath: isActive ? 'circle(150% at 50% 85%)' : 'circle(0% at 50% 85%)',
                    opacity: 1 
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* --- CONTENT --- */}
                <div className="mvv-content">
                  <motion.div 
                    className="mvv-icon-wrapper"
                    animate={{ 
                      y: isActive ? -10 : 0, 
                      scale: isActive ? 0.8 : 1,
                      opacity: isActive ? 0.2 : 1 
                    }}
                  >
                    {/* RESTORED MISSING ICON HERE */}
                    {item.icon}
                  </motion.div>

                  <motion.h3 
                    className="mvv-title"
                    layout="position"
                    style={{ color: isActive ? '#0F172A' : '#FFFFFF' }}
                  >
                    {item.title}
                  </motion.h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p 
                        className="mvv-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        {item.text}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="mvv-indicator-wrapper">
                    <motion.div 
                      className="mvv-line"
                      animate={{ 
                        backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                        width: isActive ? '100%' : '60px'
                      }}
                    />
                    <motion.div 
                      className="mvv-dot"
                      animate={{ 
                        x: isActive ? 100 : 0,
                        backgroundColor: isActive ? '#0F172A' : '#FFFFFF'
                      }}
                    />
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;