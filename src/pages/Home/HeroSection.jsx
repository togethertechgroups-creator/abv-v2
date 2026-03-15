import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, LayoutGrid } from "lucide-react"; 
import ScrollReveal from "../../components/common/ScrollReveal";
import TiltCard from "../../components/common/TiltCard";
import portraitImg from "../../assets/images/hero_portrait.png"; 
import "./HeroSection.css";

const HeroSection = () => {
  
  // 1. Floating Badge Animation (Bobbing)
  const floatAnim = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // 2. PREMIUM TEXT ANIMATION VARIANTS
  const titleContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each line
        delayChildren: 0.1
      }
    }
  };

  const titleChildVariants = {
    hidden: { y: "100%", opacity: 0, rotateX: -10 }, 
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1.0, 
        ease: [0.25, 1, 0.5, 1], // Custom Bezier for "Luxury" feel (starts fast, lands soft)
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* LEFT COLUMN: Visuals */}
        <div className="hero-visual-left">
          <TiltCard className="portrait-wrapper">
            <img src={portraitImg} alt="TogetherTech Team Working" className="portrait-img" />
            
            {/* Badge 1 */}
            <motion.div 
              className="float-badge badge-clocking"
              variants={floatAnim}
              animate="animate"
            >
              <div className="icon-box blue">
                <LayoutGrid size={20} color="white" />
              </div>
              <span className="badge-text">Web Apps</span>
            </motion.div>

            {/* Badge 2 */}
            <motion.div 
              className="float-badge badge-attendance"
              variants={floatAnim}
              animate="animate"
              transition={{ delay: 1.5 }}
            >
              <div className="icon-box dark">
                <CheckCircle size={20} color="white" />
              </div>
              <span className="badge-text">SEO Ranked</span>
            </motion.div>
          </TiltCard>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="hero-content-right">
          
          {/* ANIMATED TITLE START */}
          <motion.h1 
            className="hero-title"
            initial="hidden"
            whileInView="visible" // Triggers when scrolled into view
            viewport={{ once: true }}
            variants={titleContainerVariants}
          >
            {/* Line 1 */}
            <div className="line-mask">
              <motion.span variants={titleChildVariants} className="text-dark block">
                Professional Web
              </motion.span>
            </div>

            {/* Line 2 */}
            <div className="line-mask">
              <motion.span variants={titleChildVariants} className="text-orange block">
                Design & Development
              </motion.span>
            </div>

            {/* Line 3 */}
            <div className="line-mask">
              <motion.span variants={titleChildVariants} className="text-dark block">
                For Local Businesses
              </motion.span>
            </div>
          </motion.h1>
          {/* ANIMATED TITLE END */}
            
          <ScrollReveal>
            <p className="hero-subtiitle">
              Beautiful, fast, and mobile-optimized websites that turn visitors into 
              loyal customers. Stand out in the digital landscape with a professional 
              online presence tailored for growth.
            </p>

            <div className="hero-actions">
              <Link to="/contact" state={{ audit: true }} className="btn-primary request" style={{ textDecoration: 'none', display: 'inline-block' }}>Get Free Audit</Link>
              <Link to="/work" className="btn-link">View Our Work</Link>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>SEO Optimized</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>Mobile Ready</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="check-icon" size={20} />
                <span>Fast Performance</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
