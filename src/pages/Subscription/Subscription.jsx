import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti'; // Import the confetti
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      desc: 'Ideal for new local businesses. Get a professional 3-page site with basic SEO.',
      price: '$250',
      delay: 0.2
    },
    {
      id: 'professional',
      title: 'Professional',
      desc: 'For growing brands. Includes up to 10 pages, premium animations, and CMS.',
      price: '$350',
      delay: 0.4
    },
    {
      id: 'premium',
      title: 'Premium',
      desc: 'Full E-Commerce solution with payment gateways and prioritized support.',
      price: '$550', 
      delay: 0.6
    }
  ];

  // --- LOGIC: Handle Click, Deselect, and Crackers ---
  const handlePlanClick = (id, title) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      triggerConfetti();
      // Navigate after a short delay for the effect
      setTimeout(() => {
        navigate('/contact', { state: { plan: title } });
      }, 1500);
    }
  };

  const triggerConfetti = () => {
    // Fire confetti from the center-bottom of the screen
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // origin y: 0.6 means it shoots from slightly below the middle
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  // Header Animation
  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: "circOut", delay: 0.2 } }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 400, delay: 0 } }
  };

  return (
    <div className="sub-page">
      <div className="sub-container">
        
        <div className="sub-header">
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "backOut" }}>
            Subscription
          </motion.h1>
          <div className="sub-graphic">
            <motion.div className="sub-dot" variants={dotVariants} initial="hidden" animate="visible" />
            <motion.div className="sub-line" variants={lineVariants} initial="hidden" animate="visible" />
          </div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            Choosing a pricing plan <br /> that works for you
          </motion.h2>
        </div>

        <div className="sub-list">
          {plans.map((plan) => {
            const isSelected = selectedId === plan.id;
            const isBlur = selectedId !== null && !isSelected;

            return (
              <motion.div 
                key={plan.id}
                className={`sub-row ${isSelected ? 'row-active' : ''}`}
                
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                
                animate={{ 
                  scale: isSelected ? 1.05 : (isBlur ? 0.95 : 1),
                  opacity: isBlur ? 0.5 : 1,
                  filter: isBlur ? "blur(3px)" : "blur(0px)",
                  borderColor: isSelected ? "#F59E0B" : "transparent"
                }}
                
                onClick={() => handlePlanClick(plan.id, plan.title)}
                whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                {/* --- SELECTION DECORATION (Transparent) --- */}
                <AnimatePresence>
                  {isSelected && (
                    <>
                      {/* 1. Glassy Background Tint */}
                      <motion.div 
                        className="active-glass-tint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />

                      {/* 2. Floating "Selected" Stamp */}
                      <motion.div 
                        className="selected-stamp"
                        initial={{ scale: 2, opacity: 0, rotate: -20 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <CheckCircle2 size={24} /> Selected
                      </motion.div>

                      {/* 3. Pop Particles (Local feedback) */}
                      <motion.div 
                         className="mini-pop"
                         initial={{ scale: 0 }}
                         animate={{ scale: 1.5, opacity: 0 }}
                         transition={{ duration: 0.6 }}
                      >
                         <Sparkles size={80} color="#F59E0B" />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* --- CONTENT (Stays Visible) --- */}
                <div className="sub-content-wrapper">
                  <div className="sub-col-title">
                    <h3>{plan.title}</h3>
                  </div>

                  <div className="sub-col-desc">
                    <p>{plan.desc}</p>
                    <button 
                      className={`sub-btn ${isSelected ? 'btn-selected' : ''}`}
                    >
                      {isSelected ? "Unselect" : "Subscribe"}
                    </button>
                  </div>

                  <div className="sub-col-price">
                    <span className="price-val" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{plan.price}</span>
                    
                    {!isSelected && (
                      <motion.div className="hover-arrow" initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }}>
                        <ChevronRight color="#F59E0B" />
                      </motion.div>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
