import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// IMPORTS YOUR LOGO
import logoImg from '../../assets/abv.png'; 

const TogetherTechLoader = () => {
  const [scanComplete, setScanComplete] = useState(false);

  // Trigger the "Access Granted" phase after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setScanComplete(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="together-tech-loader-container"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Courier New', Courier, monospace", // Monospace fits security themes
        }}
      >
        
        {/* === BACKGROUND: SPLIT GATES === */}
        {/* Top Gate */}
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '50%',
            backgroundColor: '#0f172a', // Slate 900 (Deep Security Blue/Black)
            zIndex: 0,
            borderBottom: '1px solid #334155'
          }}
        >
          {/* Grid Pattern */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.1,
            backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </motion.div>

        {/* Bottom Gate */}
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0, height: '50%',
            backgroundColor: '#0f172a',
            zIndex: 0,
            borderTop: '1px solid #334155'
          }}
        >
           {/* Grid Pattern */}
           <div style={{
            position: 'absolute', inset: 0, opacity: 0.1,
            backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </motion.div>


        {/* === CENTER: THE SECURITY KEYCARD === */}
        <motion.div
          exit={{ scale: 0, opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 10, position: 'relative' }}
        >
          {/* The Card Container - White background solves your Dark Logo problem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{
              width: '320px',
              height: '220px',
              backgroundColor: '#f8fafc', // Very light grey/white
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 50px rgba(56, 189, 248, 0.2)', // Cyan Glow
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid #cbd5e1'
            }}
          >
            {/* User Info / Header mimic */}
            <div style={{ position: 'absolute', top: '15px', left: '20px', width: '40px', height: '4px', background: '#cbd5e1', borderRadius: '2px' }} />
            <div style={{ position: 'absolute', top: '15px', right: '20px', width: '10px', height: '10px', borderRadius: '50%', background: scanComplete ? '#22c55e' : '#ef4444' }} />

            {/* YOUR LOGO - Perfectly visible on white */}
            <img 
              src={logoImg} 
              alt="Logo" 
              style={{ width: '220px', height: 'auto', zIndex: 2, marginBottom: '10px' }} 
            />


            {/* Scanning Laser Line */}
            {!scanComplete && (
              <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  left: 0, right: 0,
                  height: '2px',
                  background: '#38bdf8', // Cyan Laser
                  boxShadow: '0 0 15px #38bdf8',
                  zIndex: 5
                }}
              />
            )}

            {/* Status Text */}
            <div style={{ marginTop: '20px', color: '#64748b', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>
              {scanComplete ? (
                <span style={{ color: '#0f172a' }}>ACCESS GRANTED</span>
              ) : (
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1] }} 
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  VERIFYING...
                </motion.span>
              )}
            </div>

          </motion.div>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default TogetherTechLoader;