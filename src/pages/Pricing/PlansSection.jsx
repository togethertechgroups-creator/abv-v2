import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';

const PlansSection = () => {
  // Default to index 1 (Pro) being active initially
  const [activeIndex, setActiveIndex] = useState(1);

  const plans = [
    {
      name: "Starter",
      desc: "For new local businesses looking to get online.",
      price: "250",
      btnText: "Choose Starter",
      features: ["Up to 3 Pages", "Mobile-Responsive Design", "Basic SEO Setup", "Contact Form Integration", "WhatsApp Integration", "1 Month Support"]
    },
    {
      name: "Professional",
      desc: "For growing brands needing custom animations and CMS.",
      price: "350",
      btnText: "Choose Professional",
      features: ["Up to 10 Pages", "Premium Custom Animations", "Full On-Page SEO", "CMS / Blog Integration", "Google Analytics", "2 Months Support"]
    },
    {
      name: "Premium",
      desc: "For established retail needing E-Commerce and high performance.",
      price: "550",
      btnText: "Choose Premium",
      features: ["Custom Pages", "Full E-Commerce / Ordering", "Payment Gateway", "User Accounts & Dashboards", "High-Performance Architecture", "3 Months Priority Support"]
    }
  ];

  return (
    <div className="plans-grid">
      {plans.map((plan, i) => {
        const isActive = i === activeIndex;

        return (
          <motion.div 
            key={i}
            // LOGIC: Toggle the 'highlight-card' class based on state, NOT hardcoded data
            className={`plan-card ${isActive ? 'highlight-card' : ''}`}
            
            // ANIMATION 1: Layout prop makes the cards resize smoothly around each other
            layout 
            
            // ANIMATION 2: Active card gets bigger and sits on top
            animate={{ 
              scale: isActive ? 1.05 : 1,
              zIndex: isActive ? 10 : 1,
              borderColor: isActive ? '#FDBA74' : '#E2E8F0'
            }}
            
            // Click Handler
            onClick={() => setActiveIndex(i)}
            
            // Hover effect (subtle lift)
            whileHover={{ y: -5, cursor: 'pointer' }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          >
            {/* Floating Badge for Active Card */}
            <AnimatePresence>
              {isActive && (
                <motion.div 
                  className="active-badge"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    left: '0', 
                    right: '0',
                    margin: 'auto',
                    width: 'fit-content',
                    background: '#F59E0B',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)'
                  }}
                >
                  <Sparkles size={14} /> Recommended
                </motion.div>
              )}
            </AnimatePresence>

            <div className="plan-header">
              <motion.h3 layout>{plan.name}</motion.h3>
              <motion.p layout className="plan-desc">{plan.desc}</motion.p>
              
              <div className="price-area">
                {plan.custom ? (
                  <h2 className="price-text">Custom Pricing</h2>
                ) : (
                  <div className="price-wrapper">
                    <span className="currency" style={{ fontSize: '1.5rem', color: '#F59E0B' }}>$</span>
                    <motion.h2 
                      className="price-text"
                      style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0F172A' }}
                    >
                      {plan.price}
                    </motion.h2>
                  </div>
                )}
              </div>

              {/* Button changes color dynamically */}
              <Link to="/contact" state={{ plan: plan.name }}>
                <motion.button 
                  className={`plan-btn ${isActive ? 'btn-dark' : 'btn-orange'}`}
                  whileTap={{ scale: 0.95 }}
                  layout
                >
                  {plan.btnText}
                </motion.button>
              </Link>
            </div>

            <div className="plan-divider"></div>

            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Check size={18} className="check-icon" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PlansSection;
