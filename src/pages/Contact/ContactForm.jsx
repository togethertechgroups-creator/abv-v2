import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const SERVICE_ID = 'service_d7atxwo';
const TEMPLATE_ID = 'template_arsn94w';
const PUBLIC_KEY = 'mAAEQHGLOW5z5VCxO';

function ContactForm() {
  const location = useLocation();
  const formSectionRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    whatsapp: '',
    business_type: '',
    message: '',
  });

  const [displayText, setDisplayText] = useState('');
  const fullText = "Contact with Us now";

  // Typing Animation Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Speed of typing
    return () => clearInterval(interval);
  }, []);

  // Handle passed plan state
  useEffect(() => {
    if (location.state) {
      if (location.state.plan) {
        setFormData(prev => ({
          ...prev,
          message: `I am interested in the ${location.state.plan} plan. Please provide more details.`
        }));
      } else if (location.state.audit) {
        setFormData(prev => ({
          ...prev,
          message: `I would like to request a Free Audit for my website. Please provide more details on how we can get started.`
        }));
      }

      // Auto-scroll to form
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.email,
      whatsapp: formData.whatsapp,
      business_type: formData.business_type,
      message: formData.message,
      time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setFormData({ user_name: '', email: '', whatsapp: '', business_type: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleReset = () => {
    setFormData({
      user_name: '',
      email: '',
      whatsapp: '',
      business_type: '',
      message: ''
    });
  };

  return (
    <section className="contact-form-section" id="contact-form" ref={formSectionRef}>
      <div className="cf-container">
        
        {/* Animated Header */}
        <div className="cf-header">
          <h4 className="cf-tag-line">
            {displayText}
            <span className="cursor">|</span>
          </h4>
          <h2 className="cf-title">
            Feel Free to Write Our <br />
            Technology Experts
          </h2>
        </div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cf-status-message success"
          >
            <CheckCircle size={48} className="status-icon" />
            <h3>Request Sent!</h3>
            <p>Thank you. We will get back to you within a few hours.</p>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cf-status-message error"
          >
            <AlertCircle size={48} className="status-icon" />
            <h3>Something went wrong</h3>
            <p>Please try again or contact us directly on WhatsApp.</p>
          </motion.div>
        ) : (
          <form className="cf-form-wrapper" onSubmit={handleSubmit}>
            <div className="cf-grid-row">
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="cf-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cf-input"
                />
              </div>
            </div>

            <div className="cf-grid-row">
              <div className="form-group">
                <select
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  required
                  className="cf-input cf-select"
                >
                  <option value="" disabled>Select Business Type</option>
                  <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                  <option value="Real Estate / Construction">Real Estate / Construction</option>
                  <option value="Retail / E-commerce">Retail / E-commerce</option>
                  <option value="Service Provider">Service Provider</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="cf-input"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="cf-textarea"
              ></textarea>
            </div>

            <div className="cf-actions">
              <motion.button 
                type="submit" 
                className={`cf-btn primary ${status === 'submitting' ? 'loading' : ''}`}
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'submitting' ? 'Sending...' : 'Request Quote'}
              </motion.button>
              
              <motion.button 
                type="button" 
                className="cf-btn secondary"
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset
              </motion.button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}

export default ContactForm;