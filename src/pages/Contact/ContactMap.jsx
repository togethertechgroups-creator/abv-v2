import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './ContactMap.css';
// Import the NeonMap we created in the previous step
// Adjust this path based on where you saved NeonMap.jsx
import NeonMap from '../../components/common/Footer/NeonMap'; 

const ContactMap = () => {
  // --- VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="contact-map-section">
      <div className="cm-container">
        
        <div className="cm-header">
          <h4 className="cm-tag">Need Any Help</h4>
          <h2 className="cm-title">Get in touch with us</h2>
          <p className="cm-subtitle">We're committed to providing fast, reliable assistance.</p>
        </div>

        <div className="cm-content-grid">
          
          {/* Left: Contact Info */}
          <motion.div 
            className="cm-info-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="cm-info-item" variants={itemVariants}>
              <div className="cm-icon-box"><MapPin size={24} className="cm-icon" /></div>
              <div className="cm-text-box">
                <p>Tnhb colony velachery chennai,</p>
                <p>tamilnadu madurai india</p>
              </div>
            </motion.div>

            <motion.div className="cm-info-item" variants={itemVariants}>
              <div className="cm-icon-box"><Phone size={24} className="cm-icon" /></div>
              <div className="cm-text-box"><p className="cm-highlight">+91 9047549682</p></div>
            </motion.div>

            <motion.div className="cm-info-item" variants={itemVariants}>
              <div className="cm-icon-box"><Mail size={24} className="cm-icon" /></div>
              <div className="cm-text-box"><p className="cm-highlight">togethertechofficial@gmail.com</p></div>
            </motion.div>
          </motion.div>

          {/* Right: The Neon Map */}
          <motion.div 
            className="cm-map-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            {/* We simply render NeonMap here. 
               It contains the TileLayer (Dark Mode), the Coordinates, 
               and the 3D Pin animation itself.
            */}
            <div className="cm-map-wrapper">
               <NeonMap />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;