import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, GitFork } from 'lucide-react';
// Import the Patrol Animation Component
import PatrolAnimation from '../../common/PatrolAnimation'; 
// SWITCHED TO NEON MAP (Dark/Night Theme)
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="footer-section" 
      // CRITICAL: specific styles to contain the absolute animation inside the footer
      style={{ position: 'relative', overflow: 'hidden' }} 
    >
      {/* zIndex 2 ensures text/buttons stay clickable ON TOP of the animation */}
      <div className="footer-container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top CTA Section */}
        <div className="footer-top">
          <h2 className="footer-cta-text">
            Smarter Web Development. Stronger Digital Presence. Better Results.
          </h2>
          <a href="/#contact" className="footer-cta-btn" style={{ textDecoration: 'none' }}>Get In Touch</a>
        </div>

        <div className="footer-divider"></div>

        {/* MAIN LAYOUT: 2 COLUMNS */}
        <div className="footer-main-grid">
          
          {/* --- LEFT COLUMN: Contact Info & Socials --- */}
          <div className="footer-left-col">
            <div className="contact-item">
              <div className="icon-circle">
                <MapPin size={20} className="contact-icon-svg" />
              </div>
              <div className="contact-text">
                <p>Helping local businesses dominate</p>
                <p>their digital landscape with premium,</p>
                <p>conversion-focused web applications.</p>
                <p>All Over India</p>
              </div>
            </div>

            <div className="contact-item align-center">
              <div className="icon-circle">
                <Phone size={20} className="contact-icon-svg" />
              </div>
              <p className="contact-text single-line">+91 90475 49682</p>
            </div>

            <div className="contact-item align-center">
              <div className="icon-circle">
                <Mail size={20} className="contact-icon-svg" />
              </div>
              <p className="contact-text single-line">togethertechgroups@gmail.com</p>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Links (Top) & Map (Bottom) --- */}
          <div className="footer-right-col">
            
            {/* 1. Links Grid (3x2) */}
            <div className="links-grid-system">
              <Link to="/" className="footer-link">
                <GitFork size={18} className="link-node-icon" /> Home
              </Link>
              <a href="/#work" className="footer-link">
                <GitFork size={18} className="link-node-icon" /> Work
              </a>
              <Link to="/contact" className="footer-link">
                <GitFork size={18} className="link-node-icon" /> Contact Us
              </Link>

              <Link to="/about" className="footer-link">
                <GitFork size={18} className="link-node-icon" /> About Us
              </Link>
              <Link to="/pricing" className="footer-link">
                <GitFork size={18} className="link-node-icon" /> Pricing
              </Link>
              <a href="/#faq" className="footer-link">
                <GitFork size={18} className="link-node-icon" /> FAQ
              </a>
            </div>

            {/* 2. REAL GOOGLE MAP EMBED (NEON NIGHT MODE) */}
            {/* <div className="footer-map-wrapper" style={{ 
                height: '250px', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                // Changed to Dark Background for loading state
                background: '#143354ff', 
                border: '1px solid #ff6b00', // Keeps the branding border
                boxShadow: '0 0 15px rgba(0,0,0,0.5)' // Adds depth
            }}>
               <NeonMap />
            </div> */}

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p>Copyright @ {currentYear} TogetherTech. All Rights Reserved</p>
        </div>

      </div>

      {/* --- ADD THE ANIMATION HERE AT THE BOTTOM --- */}
      <PatrolAnimation />

    </footer>
  );
}

export default Footer;