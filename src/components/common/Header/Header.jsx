import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 
import { Menu, X } from "lucide-react";
import logoImg from "../../../assets/abv.png"; 
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  // --- LOGO ANIMATION LOGIC (Simplified for ABV Logo) ---
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
     setHoveredPath(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.header
      className={`together-tech-header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        
        {/* LOGO WRAPPER WITH ANIMATION LOGIC */}
        <div className="logo-wrapper">
          <Link to="/">
            <AnimatePresence mode="wait">
              <motion.img 
                key="static-logo"
                src={logoImg} 
                alt="TogetherTech" 
                className="header-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </Link>
        </div>

        {/* Center: Animated Pill Navigation */}
        <nav 
            className="desktop-nav-pill"
            onMouseLeave={() => setHoveredPath(location.pathname)}
        >
          {navLinks.map((link) => {
            const isActive = hoveredPath === link.path;
            
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`nav-item ${isActive ? "active-text" : ""}`}
                onMouseOver={() => setHoveredPath(link.path)}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="active-pill-bg"
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                    }}
                  />
                )}
                <span className="nav-text">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link to="/subscription">
             <button className="subscription-btn">Subscription</button>
          </Link>
          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.nav 
          className="mobile-nav-dropdown"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {navLinks.map((link) => {
             const isActive = location.pathname === link.path;
             return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`mobile-link ${isActive ? "active-mobile" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
             );
          })}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default React.memo(Header);
