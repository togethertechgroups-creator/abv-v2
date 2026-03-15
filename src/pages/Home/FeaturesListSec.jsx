import React from 'react';
import { motion } from 'framer-motion';
import './FeaturesListSec.css';

const FeaturesListSec = () => {
  const allFeatures = [
    { title: 'Responsive Design', description: 'Pixel-perfect layouts that work flawlessly on all mobile devices and desktops.' },
    { title: 'E-Commerce Solutions', description: 'Secure payment gateways and product management for your online store.' },
    { title: 'Custom CMS', description: 'Easy-to-use content management systems to update your site without coding.' },
    { title: 'Technical SEO', description: 'Core Web Vitals and metadata optimization for better search engine rankings.' },
    { title: 'High Performance', description: 'Lightning-fast load times using modern frameworks like Next.js and React.' },
    { title: 'WhatsApp Integration', description: 'One-click chat buttons to connect with your customers instantly.' },
    { title: 'Custom CRM', description: 'Tailored lead management and customer tracking for your specific workflow.' },
    { title: 'Analytics & Tracking', description: 'Detailed insights into visitor behavior and conversion tracking.' },
    { title: 'Free Maintenance', description: 'Ongoing support and security updates to keep your digital home safe.' }
  ];

  // Split data into 3 rows (3 items per row)
  const row1 = allFeatures.slice(0, 3);
  const row2 = allFeatures.slice(3, 6);
  const row3 = allFeatures.slice(6, 9);

  return (
    <section className="fl-section">
      <div className="fl-container">
        
        <div className="fl-header">
          <h2 className="fl-title">
            Your All-In-One Partner <br />
            for Digital Excellence
          </h2>
          <p className="fl-subtitle">
            We provide comprehensive web and software solutions that help 
            ambitious brands scale, engage customers, and lead their industries.
          </p>
        </div>

        {/* Scroll Container */}
        <div className="fl-scroll-wrapper">
          <MarqueeRow items={row1} direction="left" speed={20} />
          <MarqueeRow items={row2} direction="right" speed={25} />
          <MarqueeRow items={row3} direction="left" speed={22} />
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual animated rows
const MarqueeRow = ({ items, direction, speed }) => {
  // We duplicate the items 4 times to ensure seamless infinite scrolling on wide screens
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-row-outer">
      <motion.div 
        className="marquee-track"
        initial={{ x: direction === 'left' ? 0 : "-50%" }}
        animate={{ x: direction === 'left' ? "-50%" : 0 }}
        transition={{ 
          duration: speed, 
          ease: "linear", 
          repeat: Infinity 
        }}
        // Optional: Pause animation when user hovers over the row
        whileHover={{ animationPlayState: "paused" }} 
      >
        {duplicatedItems.map((feature, index) => (
          <div className="fl-card" key={`${feature.title}-${index}`}>
            <h3 className="fl-card-title">{feature.title}</h3>
            <p className="fl-card-desc">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesListSec; 
