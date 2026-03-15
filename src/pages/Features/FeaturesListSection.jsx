import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, GitFork, Building2, MapPin, // Row 1 Icons
  AlertTriangle, Coffee, Users, ClipboardCheck, // Row 2 Icons
  BarChart3, Lock, Wallet, Route, // Row 3 Icons
  Network, UserCheck, ClipboardList, ScanFace // Row 4 Icons
} from 'lucide-react';
import './FeaturesListSection.css';

const FeaturesListSection = () => {
  // Animation: Cards Slide Up
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation: Orange Line Draws
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 }
    }
  };

  return (
    <section className="features-flow-section">
      <div className="flow-container">
        
        <div className="flow-header">
          <h2 className="flow-title">Discover Everything We Build For You</h2>
          <p className="flow-subtitle">
            Explore our suite of digital solutions designed to accelerate your 
            online business and enhance user engagement.
          </p>
        </div>

        <div className="flow-layout">

          {/* ==================== ROW 1 ==================== */}
          <motion.div 
            className="flow-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Stack */}
            <div className="col-stack start">
              <FeatureCard 
                icon={<LayoutDashboard size={28} />} 
                title="UI/UX Design" 
                desc="Bespoke, brand-aligned interfaces that offer seamless user experiences."
                variants={cardVariants}
              />
              <FeatureCard 
                icon={<GitFork size={28} />} 
                title="Frontend Dev" 
                desc="Lightning-fast, responsive web interfaces built with React and Vite."
                variants={cardVariants}
              />
            </div>
            {/* Right Group */}
            <div className="col-group">
              <div className="group-bar-wrapper align-right">
                <motion.div className="orange-bar" variants={lineVariants} />
                <div className="navy-dot"></div>
              </div>
              <div className="group-box-content border-right-style">
                <FeatureCard 
                  icon={<Building2 size={28} />} 
                  title="Backend Logic" 
                  desc="Robust, scalable server-side systems ensuring reliability and security."
                  variants={cardVariants}
                />
                <FeatureCard 
                  icon={<MapPin size={28} />} 
                  title="Cloud Hosting" 
                  desc="Optimized deployment strategies for 99.9% uptime and global reach."
                  variants={cardVariants}
                />
              </div>
            </div>
          </motion.div>

          {/* ==================== ROW 2 ==================== */}
          <motion.div 
            className="flow-row reverse-mobile"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Group */}
            <div className="col-group">
              <div className="group-bar-wrapper align-left">
                <div className="navy-dot"></div>
                <motion.div className="orange-bar" variants={lineVariants} />
              </div>
              <div className="group-box-content border-left-style">
                <FeatureCard 
                  icon={<AlertTriangle size={28} />} 
                  title="Error Tracking" 
                  desc="Continuous monitoring to identify and fix issues before your users do."
                  variants={cardVariants}
                />
                <FeatureCard 
                  icon={<Coffee size={28} />} 
                  title="Project Management" 
                  desc="Agile workflows keeping your launch on track and transparent."
                  variants={cardVariants}
                />
              </div>
            </div>
            {/* Right Stack */}
            <div className="col-stack end">
              <FeatureCard 
                icon={<Users size={28} />} 
                title="Team Collab" 
                desc="Integrated tools for seamless communication between tech and business."
                variants={cardVariants}
              />
              <FeatureCard 
                icon={<ClipboardCheck size={28} />} 
                title="Quality Audit" 
                desc="Rigorous testing phases ensuring every line of code meets global standards."
                variants={cardVariants}
              />
            </div>
          </motion.div>

          {/* ==================== ROW 3 (NEW) ==================== */}
          <motion.div 
            className="flow-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Stack */}
            <div className="col-stack start">
              <FeatureCard 
                icon={<BarChart3 size={28} />} 
                title="Advanced SEO" 
                desc="In-depth optimization for search engines to boost your organic reach."
                variants={cardVariants}
              />
              <FeatureCard 
                icon={<Lock size={28} />} 
                title="Secure Auth" 
                desc="Modern authentication systems (OAuth, JWT) to protect user data."
                variants={cardVariants}
              />
            </div>
            {/* Right Group */}
            <div className="col-group">
              <div className="group-bar-wrapper align-right">
                <motion.div className="orange-bar" variants={lineVariants} />
                <div className="navy-dot"></div>
              </div>
              <div className="group-box-content border-right-style">
                <FeatureCard 
                  icon={<Wallet size={28} />} 
                  title="E-Commerce" 
                  desc="Full storefront integration with seamless payment gateway settings."
                  variants={cardVariants}
                />
                <FeatureCard 
                  icon={<Route size={28} />} 
                  title="API Integration" 
                  desc="Connecting your platform to third-party services like WhatsApp, Maps, & CRM."
                  variants={cardVariants}
                />
              </div>
            </div>
          </motion.div>

          {/* ==================== ROW 4 (NEW) ==================== */}
          <motion.div 
            className="flow-row reverse-mobile"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Group */}
            <div className="col-group">
              <div className="group-bar-wrapper align-left">
                <div className="navy-dot"></div>
                <motion.div className="orange-bar" variants={lineVariants} />
              </div>
              <div className="group-box-content border-left-style">
                <FeatureCard 
                  icon={<Network size={28} />} 
                  title="PWA Support" 
                  desc="Progressive Web Apps that work offline and feel like native mobile apps."
                  variants={cardVariants}
                />
                <FeatureCard 
                  icon={<UserCheck size={28} />} 
                  title="Conversion Opt" 
                  desc="Data-driven optimizations to turn your visitors into paying customers."
                  variants={cardVariants}
                />
              </div>
            </div>
            {/* Right Stack */}
            <div className="col-stack end">
              <FeatureCard 
                icon={<ClipboardList size={28} />} 
                title="Content CMS" 
                desc="Easy-to-use admin panels for managing your own blog and site content."
                variants={cardVariants}
              />
              <FeatureCard 
                icon={<ScanFace size={28} />} 
                title="AI Integration" 
                desc="Smart features like chatbots and automated data processing."
                variants={cardVariants}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
const FeatureCard = ({ icon, title, desc, variants }) => (
  <motion.div 
    className="flow-card"
    variants={variants}
    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
  >
    <div className="flow-icon-circle">{icon}</div>
    <h3 className="flow-card-title">{title}</h3>
    <p className="flow-card-desc">{desc}</p>
  </motion.div>
);

export default FeaturesListSection;
