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
            className={`plan-card ${isActive ? 'highlight-card' : ''}`}
            layout 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              layout: { duration: 0.4, type: "spring", stiffness: 100 }
            }}
            whileHover={{ y: -10 }}
            onClick={() => setActiveIndex(i)}
          >
            {/* Recommendation Badge */}
            <AnimatePresence>
              {isActive && (
                <motion.div 
                  className="active-badge"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Sparkles size={14} /> Recommended
                </motion.div>
              )}
            </AnimatePresence>

            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
              
              <div className="price-container">
                <span className="currency">$</span>
                <h2 className="price-value">{plan.price}</h2>
              </div>

              <Link to="/contact" state={{ plan: plan.name }} className="plan-link">
                <motion.button 
                  className={`plan-cta-btn ${isActive ? 'btn-active' : 'btn-normal'}`}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {plan.btnText}
                </motion.button>
              </Link>
            </div>

            <div className="plan-divider"></div>

            <ul className="plan-features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <div className="check-icon-wrapper">
                    <Check size={14} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PlansSection;
