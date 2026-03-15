import { useState } from 'react';
import './FaqSection.css';

function FaqSection() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically, a standard 5-page business website takes about 3 to 4 weeks from discovery to launch. E-commerce or highly custom premium projects may take 6 to 8 weeks depending on complexity."
    },
    {
      question: "Do I completely own the website?",
      answer: "Yes, 100%. Once final payment is made, you own the code, design, domain, and all assets. We provide you with all administrator access and source codes."
    },
    {
      question: "Will the website work on mobile phones?",
      answer: "Absolutely. We employ a 'Mobile-First' design strategy. We ensure your site looks spectacular and functions perfectly on all devices (phones, tablets, and desktops)."
    },
    {
      question: "Do you provide hosting and domains?",
      answer: "Yes, we can manage the technical setup for you including premium hosting, SSL certificates, and domain registration. We recommend modern platforms like Vercel or AWS for speed."
    }
  ];

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${expandedIdx === idx ? 'expanded' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleExpand(idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{expandedIdx === idx ? '-' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
