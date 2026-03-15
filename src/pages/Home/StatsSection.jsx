import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import './StatsSection.css';

// Sub-component to handle the number counting animation
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  
  // 1. CHANGE: Set once: false so it triggers every time
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    // Parse the numeric part (e.g., "12k" -> 12)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

    if (isInView) {
      // Animate TO the number
      spring.set(numericValue);
    } else {
      // 2. CHANGE: Reset TO 0 immediately when scrolled out of view
      // This ensures it starts from 0 again when you come back
      spring.set(0);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

function StatsSection() {
  const stats = [
    { number: '5', suffix: '+', label: 'Custom Projects Successfully Launched' },
    { number: '100', suffix: '%', label: 'Client Satisfaction in Local Market' },
    { number: '30', suffix: ' Days', label: 'Average Fast Delivery Guarantee' },
    { number: '24', suffix: '/7', label: 'Priority Support & Free Maintenance' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              // 3. CHANGE: Set once: false here too if you want the cards 
              // to fade in/out every time (optional, but recommended for consistency)
              viewport={{ once: false, margin: "-50px" }}
              
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Animated Number */}
              <h2 className="stat-number">
                <Counter value={stat.number} suffix={stat.suffix} />
              </h2>
              
              {/* Text with Orange Bar */}
              <div className="stat-content">
                <div className="vertical-bar"></div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
