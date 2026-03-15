import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, HeartHandshake, Zap, MonitorSmartphone, Trophy } from 'lucide-react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <MapPin size={24} />,
      title: "Serving All Over India",
      desc: "From Chennai to Mumbai, Delhi to Bengaluru — we deliver high-quality digital solutions remotely for businesses across India with zero compromise on quality."
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Turnaround",
      desc: "Stop waiting months. Get your premium, fully functional website launched within 3 to 4 weeks."
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "24/7 Dedicated Support",
      desc: "We don't just build and disappear. You get continuous maintenance, backups, and emergency support."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast Speeds",
      desc: "Built with the latest React & Vite tech stack, ensuring Google loves your site and users don't bounce."
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: "Mobile-First approach",
      desc: "70% of local searches are on phones. Every design is perfected for mobile screens before desktop."
    },
    {
      icon: <Trophy size={24} />,
      title: "Proven Results",
      desc: "Our designs are optimized for conversions, turning your website into a 24/7 automated sales machine."
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="wcu-container-alt">
        <div className="wcu-header-alt">
          <motion.h4 
            className="wcu-tag-alt"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Efficiency & Trust
          </motion.h4>
          <motion.h2 
            className="wcu-title-alt"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Choose TogetherTech?
          </motion.h2>
          <motion.p 
            className="wcu-subtitle-alt"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We combine high-end development with a personalized, local touch that empowers your business.
          </motion.p>
        </div>

        <div className="wcu-grid-alt">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="wcu-card-alt"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(245, 158, 11, 0.4)' }}
            >
              <div className="wcu-icon-box-alt">
                {reason.icon}
              </div>
              <h3 className="wcu-card-title-alt">{reason.title}</h3>
              <p className="wcu-card-desc-alt">{reason.desc}</p>
              
              {/* Subtle hover glow */}
              <div className="wcu-card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
