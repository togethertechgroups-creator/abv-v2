import React from 'react';
import { motion } from 'framer-motion';

// IMPORT YOUR IMAGES
import patrolGif from '../../assets/images/patrol.gif'; 
import cityImg from '../../assets/images/cityyyy.png'; 

const PatrolAnimation = () => {
  return (
    <div 
      style={{
        position: 'absolute', 
        bottom: 0,
        left: 0,
        width: '100%',
        height: '190px', 
        zIndex: 0, 
        pointerEvents: 'none', 
        overflow: 'hidden',
      }}
    >
      
      {/* --- LAYER 1: THE INFINITE CITY BACKGROUND --- */}
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 1,
          backgroundImage: `url(${cityImg})`,
          backgroundRepeat: 'repeat-x',      
          backgroundSize: 'auto 100%',       
          backgroundPosition: 'bottom left', 
          opacity: 1 
        }}
        animate={{ backgroundPositionX: ["0px", "-2000px"] }} 
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      />

      {/* --- LAYER 2: THE SECURITY GUARD --- */}
      <motion.img
        src={patrolGif}
        alt="Security Patrol"
        
        // FIX 1: Start further back (negative pixels) so he starts fully off-screen
        initial={{ x: -300 }} 
        
        // FIX 2: Use '100vw' (Viewport Width) instead of '%'
        // '100vw' means "100% of the screen width"
        animate={{ x: "100vw" }} 
        
        transition={{ 
          duration: 45, 
          ease: "linear", 
          repeat: Infinity, 
          repeatDelay: 0 
        }}
        
        style={{
          height: '160px', 
          width: 'auto',
          position: 'absolute',
          bottom: '0px', 
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default PatrolAnimation;