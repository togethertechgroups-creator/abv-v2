import React from 'react';
import { motion } from 'framer-motion';

const PricingToggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="toggle-container">
      <div className="toggle-wrapper">
        
        {/* Monthly Option */}
        <div 
          className={`toggle-option ${!isAnnual ? 'active' : ''}`} 
          onClick={() => setIsAnnual(false)}
        >
          <span>Monthly</span>
          {!isAnnual && (
            <motion.div 
              className="active-bg" 
              layoutId="toggle-bg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>

        {/* Annual Option */}
        <div 
          className={`toggle-option ${isAnnual ? 'active' : ''}`} 
          onClick={() => setIsAnnual(true)}
        >
          <span>Annual</span>
          {isAnnual && (
            <motion.div 
              className="active-bg" 
              layoutId="toggle-bg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>
        
      </div>
    </div>
  );
};

export default PricingToggle;