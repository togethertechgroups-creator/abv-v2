import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react'; // Using clean icons
import twoPhoneImg from '../../assets/images/3phone.png'; 
import './HowTogetherTechWorksSection.css';

const HowTogetherTechWorksSection = () => {
  const processes = [
    { title: 'Discovery & Design', description: 'We start by understanding your brand and crafting cinematic UI/UX prototypes.' },
    { title: 'Development & Build', description: 'Our engineers build high-performance code with a focus on speed and SEO.' },
    { title: 'Launch & Support', description: 'We deploy your project in 30 days and provide ongoing maintenance and care.' }
  ];

  return (
    <section className="hrw-section">
      <div className="hrw-container">
        <div className="hrw-header">
          <h4 className="hrw-tag">Our Process</h4>
          <h2 className="hrw-title">Strategy is at the Heart of What We Do</h2>
          <p className="hrw-subtitle">Tap the icons to see the magic.</p>
        </div>
        <div className="hrw-content-grid">
          <div className="hrw-visual-col">
            <InteractivePhoneCard />
          </div>
          <div className="hrw-process-col">
            <div className="hrw-processes-wrapper">
              {processes.map((process, idx) => (
                <motion.div key={idx} className="hrw-process-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + idx * 0.2, duration: 0.5 }} viewport={{ once: true }}>
                  <h3 className="hrw-process-title">{process.title}</h3>
                  <p className="hrw-process-description">{process.description}</p>
                  {idx < processes.length - 1 && <div className="hrw-connector-line" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN CARD COMPONENT ---
const InteractivePhoneCard = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [bursts, setBursts] = useState([]);

  // Card Tilt Physics
  const mouseXSpring = useSpring(x, { stiffness: 60, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const handleBurst = (e, colorType) => {
    if (!containerRef.current) return;
    // Calculate click relative to the container for the firework
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newBurst = { id: Date.now(), x: clickX, y: clickY, colorType };
    setBursts(prev => [...prev, newBurst]);
    setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id !== newBurst.id));
    }, 2000);
  };

  return (
    <div className="interactive-container" ref={containerRef}>
        {/* FIREWORKS LAYER */}
        <AnimatePresence>
            {bursts.map(burst => (
                <ParticleBurst key={burst.id} x={burst.x} y={burst.y} colorType={burst.colorType} />
            ))}
        </AnimatePresence>

        <motion.div 
            className="holo-card-perspective"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
        <motion.div
            ref={ref}
            className="holo-card-inner"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
            {/* PHONE LAYER */}
            <motion.div 
              className="phone-layer" 
              style={{ transform: "translateZ(30px)" }} 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <img src={twoPhoneImg} alt="TogetherTech App" className="hrw-phone-img" />
                
                {/* --- ICON 1: GREEN (Left Phone) --- */}
                <OnImageActiveIcon 
                  icon={<CheckCircle size={28} color="white" fill="#10B981" />}
                  color="green"
                  position={{ top: '44%', left: '26%' }}
                  onClick={(e) => handleBurst(e, 'green')}
                />

                {/* --- ICON 2: ORANGE (Right Phone) --- */}
                <OnImageActiveIcon 
                  icon={<MapPin size={28} color="white" fill="#F59E0B" />}
                  color="orange"
                  position={{ top: '44%', right: '24%' }}
                  onClick={(e) => handleBurst(e, 'orange')}
                />
                
            </motion.div>

            {/* SHADOW */}
            <motion.div className="levitation-shadow" style={{ transform: "translateZ(-40px) rotateX(90deg)" }} animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.2, 0.4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
        </motion.div>
    </div>
  );
};

// --- SUB-COMPONENT: ICON ON IMAGE ---
const OnImageActiveIcon = ({ icon, color, position, onClick }) => {
  return (
    <motion.div 
      className={`on-image-icon ${color}`}
      style={{ ...position }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="pulse-ring"></div>
      <div className="icon-core">
        {icon}
      </div>
    </motion.div>
  );
};

// --- PARTICLE BURST (Firework) ---
const ParticleBurst = ({ x, y, colorType }) => {
    const colors = {
        orange: ['#F59E0B', '#FFF7ED', '#EA580C'],
        green: ['#10B981', '#ECFDF5', '#047857']
    };
    const selectedColors = colors[colorType] || colors.orange;
    const particleCount = 20; 

    return (
        <div style={{ position: 'absolute', top: y, left: x, pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)' }}>
            <motion.div 
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, background: 'white', borderRadius: '50%', filter: 'blur(8px)', transform: 'translate(-50%, -50%)' }}
            />
            {[...Array(particleCount)].map((_, i) => {
                const angle = (i / particleCount) * 360 + (Math.random() * 40);
                const distance = Math.random() * 120 + 40; 
                const tx = Math.cos(angle * Math.PI / 180) * distance;
                const ty = Math.sin(angle * Math.PI / 180) * distance;
                const color = selectedColors[Math.floor(Math.random() * selectedColors.length)];
                const size = Math.random() * 6 + 3; 

                return (
                    <motion.div
                        key={i}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{ x: tx, y: ty + 80, opacity: 0, scale: 0, rotate: Math.random() * 360 }}
                        transition={{ duration: Math.random() * 0.6 + 0.5, ease: "easeOut" }}
                        style={{ position: 'absolute', width: size, height: size, backgroundColor: color, borderRadius: '50%', boxShadow: `0 0 6px ${color}` }}
                    />
                );
            })}
        </div>
    );
};

export default HowTogetherTechWorksSection;