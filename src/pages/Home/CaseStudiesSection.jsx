import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import restaurantImg from '../../assets/images/restaurant_case.png';
import industrialImg from '../../assets/images/industrial_case.png';
import './CaseStudiesSection.css';

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Anjugam Chettinadu Restaurant",
      category: "Billing & Sales Management",
      challenge: "Manual billing process was extremely time-consuming, error-prone, and made tracking daily sales a confusing — leading to lost revenue and poor business visibility.",
      solution: "Developed an optimized Billing Software with a user-friendly UI and an intuitive Sales Dashboard — enabling instant bill generation, real-time sales tracking, and clear revenue insights.",
      result: "80% reduction in billing time. Full daily sales visibility with automated tracking.",
      image: restaurantImg,
    },
    {
      title: "Hyundai Polytech India",
      category: "Industrial Automation",
      challenge: "Manual record entry for item barcode verification was slow, error-prone, and caused production delays — making inventory tracking unreliable and inefficient.",
      solution: "Automated the entire process with a Barcode Scanner Data Management System — streamlining item verification, reducing human error, and delivering real-time inventory records.",
      result: "Near-zero manual errors. 60% faster item verification process across production lines.",
      image: industrialImg,
    }
  ];

  return (
    <section className="case-studies-section" id="work">
      <div className="cs-container">
        
        <div className="cs-header">
          <motion.h4 
            className="cs-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Success Stories
          </motion.h4>
          <motion.h2 
            className="cs-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Proven Results Of <br /> Our Businesses
          </motion.h2>
          <motion.p 
            className="cs-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Don't just take our word for it. See how we've transformed the digital presence of local brands.
          </motion.p>
        </div>

        <div className="cs-list">
          {cases.map((project, index) => (
            <motion.div 
              key={index}
              className={`cs-card ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Side */}
              <div className="cs-image-wrapper">
                <div 
                  className="cs-image" 
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="cs-image-overlay"></div>
              </div>

              {/* Content Side */}
              <div className="cs-content">
                <span className="cs-category">{project.category}</span>
                <h3 className="cs-project-title">{project.title}</h3>
                
                <div className="cs-details">
                  <div className="cs-detail-item">
                    <h5>Challenge</h5>
                    <p>{project.challenge}</p>
                  </div>
                  <div className="cs-divider"></div>
                  <div className="cs-detail-item">
                    <h5>Solution</h5>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <div className="cs-result-box">
                  <div className="cs-result-indicator"></div>
                  <div className="cs-result-inner">
                    <h5>The Result</h5>
                    <p>{project.result}</p>
                  </div>
                </div>

                <motion.a 
                  href="/#contact" 
                  className="cs-cta"
                  whileHover={{ x: 5 }}
                >
                  Get Similar Results
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
