import React from "react";
import { motion } from "framer-motion";

// --- CONFIGURATION: CONTROL THE FEEL HERE ---
const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 250, // Lower = "Softer/Slower" feel
  damping: 25,   // Higher = Less bouncy, more "drag"
  mass: 0.5
};

// --- 1. FADE IN (For single elements like H1, P, IMG) ---
export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up", // up, down, left, right
  fullWidth = false,
  className = ""
}) => {
  
  // Calculate movement based on direction
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        ...TRANSITION_SPRING,
        delay: delay 
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Triggers when 50px inside viewport
      style={{ width: fullWidth ? "100%" : "auto" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- 2. STAGGER CONTAINER (Wrapper for lists/grids) ---
export const StaggerContainer = ({ children, delay = 0, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.15 // Time between each item popping up
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- 3. STAGGER ITEM (The individual card/row) ---
export const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: TRANSITION_SPRING
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
