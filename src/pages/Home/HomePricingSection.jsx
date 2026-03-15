import React from 'react';
import { motion } from 'framer-motion';
import PlansSection from '../Pricing/PlansSection';
import './HomePricingSection.css';

const HomePricingSection = () => {

  return (
    <section className="home-pricing-section" id="pricing">
      <div className="hp-container">
        <div className="hp-header">
          <motion.h4 
            className="hp-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing Packages
          </motion.h4>
          <motion.h2 
            className="hp-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Transparent Packages
          </motion.h2>
          <motion.p 
            className="hp-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            No hidden costs. Choose the perfect website package for your business size and growth goals.
          </motion.p>
        </div>



        <div className="hp-plans-wrapper">
          <PlansSection />
        </div>
      </div>
    </section>
  );
};

export default HomePricingSection;
