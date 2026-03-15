import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Saravanan R.",
            role: "Owner, Anjugam Chettinadu Restaurant",
            text: "Before this software, billing used to take forever and we kept making mistakes. Now our staff generates bills in seconds and I can see the full day's sales from my phone. It completely transformed how we run the restaurant.",
            rating: 5
        },
        {
            id: 2,
            name: "Balaji S.",
            role: "Production Manager, Hyundai Polytech India",
            text: "Manual barcode entries were causing verification delays on the production floor. The automated scanner system they built eliminated human errors entirely. Our item verification is now 60% faster and fully traceable in real time.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section">
            <div className="ts-container">
                <div className="ts-header">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="quote-icon-box"
                    >
                        <Quote size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="ts-title"
                    >
                        Loved by Local Founders
                    </motion.h2>
                </div>

                <div className="ts-slider-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="ts-card"
                        >
                            <div className="ts-stars">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={18} className="star-icon" />
                                ))}
                            </div>
                            <p className="ts-text">"{testimonials[currentIndex].text}"</p>
                            <div className="ts-author">
                                <h4 className="ts-name">{testimonials[currentIndex].name}</h4>
                                <span className="ts-role">{testimonials[currentIndex].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button className="ts-nav-btn prev" onClick={prevSlide}><ChevronLeft size={24} /></button>
                    <button className="ts-nav-btn next" onClick={nextSlide}><ChevronRight size={24} /></button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
