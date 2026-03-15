import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, Wallet, ShieldCheck, Map, FileText, ScanLine, Lock, Unlock, TrendingUp, Zap } from 'lucide-react';

import dashboardImg from '../../assets/images/dashboard.png.png'; 
import qrCodeImg from '../../assets/images/URL QR Code.png';

// Import the new Interactive Background
import InteractiveBg from '../../components/common/InteractiveBg';

import './FeaturesOverviewSection.css';

const FeaturesOverviewSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const timerRef = useRef(null);

  const tabs = [
    { id: 0, label: "UI/UX Design", icon: <LayoutDashboard size={18} /> },
    { id: 1, label: "Web Development", icon: <FileText size={18} /> },
    { id: 2, label: "E-Commerce", icon: <Wallet size={18} /> },
    { id: 3, label: "SEO & Growth", icon: <TrendingUp size={18} /> },
  ];

  const arcNodes = [
    { label: "Modern UI", icon: <ShieldCheck size={18} />, pos: "bottom-left" },
    { label: "Clean Code", icon: <Users size={18} />, pos: "mid-left" },
    { label: "SEO Ready", icon: <Map size={18} />, pos: "top-center" },
    { label: "Fast Loading", icon: <Zap size={18} />, pos: "mid-right" },
    { label: "CMS Integrated", icon: <FileText size={18} />, pos: "bottom-right" },
  ];

  // ─── Unlock Sequence ─────────────────────────────────────
  const startUnlockSequence = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsUnlocked(false);

    timerRef.current = setTimeout(() => {
      setIsUnlocked(true);
    }, 300);
  };

  const resetSequence = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsUnlocked(false);
  };

  // ─── Animation Variants ─────────────────────────────────────
  const lockOverlayVariants = {
    visible: { opacity: 1, backdropFilter: "blur(12px)" },
    exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.8 } }
  };

  const lockIconVariants = {
    locked: { scale: 1, color: "#64748B" },
    verifying: { 
      rotate: [0, -15, 15, -15, 0],
      color: "#F59E0B",
      transition: { duration: 1.5, ease: "easeInOut" }
    },
    unlocked: { scale: 1.5, opacity: 0, transition: { duration: 0.5 } }
  };

  const dashboardUnfoldVariants = {
    hidden: { rotateX: -95, opacity: 0, scale: 0.9, transformPerspective: 1200 },
    visible: { 
      rotateX: 0, opacity: 1, scale: 1,
      transition: { type: "spring", stiffness: 40, damping: 15, mass: 1.5, delay: 0.2 }
    }
  };

  return (
    <section className="features-overview-section">
      
      {/* 1. INTERACTIVE BACKGROUND LAYER */}
      <InteractiveBg />

      {/* 2. MAIN CONTENT CONTAINER (Z-Index > 0) */}
      <div className="fo-container">
        <div className="fo-header">
          <h2 className="section-title">Streamline Your Digital Experience</h2>
        </div>

        {/* Tabs */}
        <div className="fo-tabs-wrapper">
          <div className="fo-tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(index);
                  startUnlockSequence();
                }}
                className={`fo-tab-btn ${activeTab === index ? 'active' : ''}`}
              >
                {tab.icon}
                <span>{tab.label}</span>

                {activeTab === index && (
                  <motion.div 
                    className="activee-bg" // Note: Ensure this matches your CSS class name
                    layoutId="activeTabBg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="fo-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="tab-content-panel"
            >
              <div className="text-wrapper">
                <h3 className="tab-title">{tabs[activeTab].label}</h3>
                <p className="tab-desc">
                  We create visually stunning and highly functional digital products tailored 
                  specifically for your business. From initial wireframes to high-fidelity 
                  prototypes, our designs ensure a premium user experience.
                </p>
              </div>

              {/* Visual stack */}
              <motion.div 
                className="visual-stack"
                onViewportEnter={startUnlockSequence}
                onViewportLeave={resetSequence}
                viewport={{ amount: 0.4 }}
              >

                {/* Arc Nodes */}
                <div className="arc-zone">
                  <svg className="arc-svg" viewBox="0 0 800 220" preserveAspectRatio="none">
                    <path d="M 50,220 Q 400,-60 750,220" className="arc-path-bg" />
                    <motion.path 
                      d="M 50,220 Q 400,-60 750,220"
                      className="arc-path-fill"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.0, ease: "easeInOut" }}
                    />
                  </svg>

                  <div className="nodes-layer">
                    {arcNodes.map((node, i) => (
                      <motion.div 
                        key={i}
                        className={`arc-node ${node.pos}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <div className="node-box">
                          <div className="node-icon">{node.icon}</div>
                          <span className="node-label">{node.label}</span>
                        </div>

                        <motion.div 
                          className="pulse-dot"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Dashboard + Lock + QR Card */}
                <div className="dashboard-zone">

                  {/* Lock Overlay */}
                  <AnimatePresence>
                    {!isUnlocked && (
                      <motion.div 
                        className="lock-overlay"
                        variants={lockOverlayVariants}
                        initial="visible"
                        exit="exit"
                      >
                        <motion.div 
                          className="lock-icon-circle"
                          variants={lockIconVariants}
                          initial="locked"
                          animate="verifying"
                          exit="unlocked"
                        >
                          {isUnlocked ? <Unlock size={40} /> : <Lock size={40} />}
                        </motion.div>

                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="lock-text"
                          transition={{ delay: 0.2 }}
                        >
                          Optimizing For Your Vision...
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dashboard Image */}
                  <motion.div 
                    className="dashboard-img-wrapper"
                    variants={dashboardUnfoldVariants}
                    initial="hidden"
                    animate={isUnlocked ? "visible" : "hidden"}
                    style={{ transformOrigin: "top" }}
                  >
                    <img src={dashboardImg} alt="TogetherTech Dashboard" className="dashboard-img" />
                  </motion.div>

                  {/* QR Card */}
                  {isUnlocked && (
                    <motion.div 
                      className="float-card qr-card"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.0, type: "spring", stiffness: 50 }}
                    >
                      <div className="card-header">
                        <span className="dot yellow"></span>
                        <strong>Project Overview</strong>
                      </div>

                      <div className="qr-image-wrapper">
                        <img src={qrCodeImg} alt="QR Code" className="qr-image" />
                      </div>

                      <ul className="card-list">
                        <li>High-Fidelity Wireframes</li>
                        <li>Interactive Prototypes</li>
                      </ul>

                      <div className="scan-icon-wrapper">
                        <ScanLine size={28} color="#F59E0B" />
                      </div>
                    </motion.div>
                  )}

                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
