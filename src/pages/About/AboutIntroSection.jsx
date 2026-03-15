import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import './AboutIntroSection.css';

// IMPORT YOUR IMAGES HERE
import phoneFrame from '../../assets/images/aboutphone.png'; 
import guardImg from '../../assets/images/about_guard.png'; // This should be the Guard ONLY (Transparent PNG is best)

const AboutIntroSection = () => {
  const ref = useRef(null);

  // Motion Values for Mouse Position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement (Spring physics)
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // 1. TILT: The Phone Frame rotates based on mouse position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // 2. PARALLAX: The Guard moves opposite to the rotation to create depth
  // Moving the guard slightly MORE than the frame makes him look like he's "inside" or "floating"
  const guardX = useTransform(mouseX, [-0.5, 0.5], ["-25px", "25px"]);
  const guardY = useTransform(mouseY, [-0.5, 0.5], ["-25px", "25px"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position as a percentage (-0.5 to 0.5)
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="about-intro-section">
      <div className="ai-container">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="ai-content-col">
          <h4 className="ai-tag">About TogetherTech</h4>
          <h1 className="ai-title">
            "Bridging the Digital Gap <br />
            for Local Entrepreneurs"
          </h1>
          <p className="ai-description">
            TogetherTech is a premium digital agency dedicated to providing 
            elite-quality web development and software solutions at honest, 
            accessible prices. We empower businesses to command professional 
            authority and scale efficiently in the modern digital world.
          </p>

          <div className="ai-highlights">
            <div className="ai-highlight-card">
              <ShieldCheck className="ai-icon" size={24} />
              <span>Premium Digital Excellence</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Phone Interaction */}
        <div 
          className="ai-visual-col"
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* The 3D Wrapper */}
          <motion.div 
            className="ai-phone-wrapper"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d", // CRITICAL: Enables true 3D
            }}
          >
            {/* LAYER 1: The Phone Frame (Top) */}
            <div className="ai-phone-frame-layer">
              <img src={phoneFrame} alt="Phone Frame" className="phone-frame-img" />
            </div>
            
            {/* LAYER 2: The Screen Mask (Middle) */}
            <div className="ai-screen-mask">
              {/* LAYER 3: The Guard (Inside/Bottom) */}
              <motion.div 
                className="ai-guard-layer"
                style={{ 
                  x: guardX, 
                  y: guardY,
                  z: 40 // Pushes it 'forward' inside the 3D space
                }}
              >
                <img src={guardImg} alt="Security Guard" className="guard-img" />
              </motion.div>
            </div>

            {/* LAYER 4: Shadow (Bottom) */}
            <div className="ai-phone-shadow"></div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntroSection;
