import React from 'react';
import './WhatsAppButton.css';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917418196986?text=Hi%20TogetherTech%2C%20I%20am%20interested%20in%20your%20services!"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Chat"
        className="whatsapp-icon"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
