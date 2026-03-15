import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // Install lucide-react if missing
import "./WhoCanUseSection.css";

// Importing images as requested
import img1 from "../../assets/images/img1.png"; // Apartments
import img2 from "../../assets/images/img2.png"; // Offices
import img3 from "../../assets/images/img3.png"; // Hospitals
import img4 from "../../assets/images/img4.png"; // Gov

const WhoCanUseSection = () => {
  const sectors = [
    {
      id: 1,
      title: "E-Commerce & Retail",
      desc: "Command local markets with high-performance online stores and catalogs.",
      img: img1,
      align: "left", // Text on left, Image on right
    },
    {
      id: 2,
      title: "Restaurants & Cafes",
      desc: "Modern digital menus and ordering systems that drive foot traffic and loyalty.",
      img: img2,
      align: "right", // Image on left, Text on right
    },
    {
      id: 3,
      title: "Local Service Providers",
      desc: "Clean, professional booking sites for medical, consulting, and repair services.",
      img: img3,
      align: "left",
    },
    {
      id: 4,
      title: "Real Estate & Construction",
      desc: "Showcase your properties and projects with cinematic immersive web designs.",
      img: img4,
      align: "right",
    },
  ];

  const features = [
    "Premium quality results",
    "Tailored to local markets",
    "Honest accessible pricing",
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="wcu-section">
      <div className="wcu-container">
        
        {/* Header */}
        <div className="wcu-header">
          <h2 className="wcu-title">Who can Partner with Us</h2>
        </div>

        {/* 2x2 Grid Section */}
        <motion.div 
          className="wcu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sectors.map((item) => (
            <motion.div 
              key={item.id} 
              className={`wcu-card ${item.align === "right" ? "reverse" : ""}`}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="wcu-text-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="wcu-image-wrapper">
                <motion.img 
                  src={item.img} 
                  alt={item.title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote Section */}
        <motion.div 
          className="wcu-bottom-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="wcu-quote-icon">
            <Quote size={40} fill="#0F172A" stroke="none" />
          </div>
          
          <h4 className="wcu-quote-text">
            We believe that every local business deserves a digital presence that competes on a global standard of excellence.
          </h4>

          {/* 3 Pills Feature List */}
          <div className="wcu-pills-row">
            {features.map((feat, i) => (
              <motion.div 
                key={i} 
                className="wcu-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="yellow-dot"></div>
                <span>{feat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoCanUseSection;