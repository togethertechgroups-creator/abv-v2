import React, { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Eye, ShieldCheck, TrendingUp, Zap, FileCheck, DollarSign } from 'lucide-react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  // RESTORED FULL ORIGINAL CONTENT
  const benefits = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden costs or surprise fees. We provide honest, upfront quotes that respect your budget and business goals.',
      icon: <DollarSign size={28} />
    },
    {
      title: 'Mobile-First Design',
      description: 'Your website will look spectacular and function perfectly on every device, from the smallest phone to the largest desktop.',
      icon: <Zap size={28} />
    },
    {
      title: 'High Performance',
      description: 'We build lightning-fast websites using modern tech stacks like Next.js and Vercel, ensuring instant load times.',
      icon: <TrendingUp size={28} />
    },
    {
      title: 'Lifetime Support',
      description: 'Our relationship doesn\'t end at launch. We provide ongoing technical support and maintenance to keep your site running.',
      icon: <ShieldCheck size={28} />
    },
    {
      title: 'SEO Optimized',
      description: 'We implement technical SEO best practices from day one to help your business rank higher and attract more local customers.',
      icon: <Eye size={28} />
    },
    {
      title: 'Fast Delivery',
      description: 'We value your time. Our streamlined process ensures your professional website is launched in as little as 30 days.',
      icon: <FileCheck size={28} />
    }
  ];

  return (
    <section className="benefits-section">
      {/* Background Grid Decoration */}
      <div className="bg-grid-pattern" />
      
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">
            <span className="text-gradient">Experience The Difference</span> 
          </h2>
          <p className="benefits-subtitle">
           Interact with our core features
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <CyberCard key={idx} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: THE CYBER CARD ---
const CyberCard = ({ benefit }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for the "Radar" spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="cyber-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* 1. THE RADAR GRID REVEAL (Follows Mouse) */}
      <motion.div
        className="card-spotlight-bg"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. THE NEON SNAKE BORDER */}
      <div className="card-border-gradient" />

      {/* 3. CONTENT */}
      <div className="card-content">
        <div className={`icon-cyber-box ${isHovered ? 'active' : ''}`}>
          {benefit.icon}
        </div>
        
        {/* 4. THE CIPHER DECODING TEXT */}
        <CipherTitle text={benefit.title} trigger={isHovered} />
        
        <p className="card-desc">{benefit.description}</p>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: TEXT DECODER LOGIC ---
const CipherTitle = ({ text, trigger }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
  
  useEffect(() => {
    let interval = null;
    
    if (trigger) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3; // Speed of decoding
      }, 30);
    } else {
      setDisplayText(text); // Reset immediately on leave
    }

    return () => clearInterval(interval);
  }, [trigger, text]);

  return <h3 className={`cyber-title ${trigger ? 'glitch' : ''}`}>{displayText}</h3>;
};

export default BenefitsSection;
