import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, width = "100%" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        // CHANGE THIS LINE:
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;