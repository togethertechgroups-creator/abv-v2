import React, { useState, useEffect } from 'react';
// Ensure these paths match your actual folder structure
import AppRouter from './router/AppRouter';
import './styles/global.css';
import { AnimatePresence } from 'framer-motion';
import TogetherTechLoader from './components/common/TogetherTechLoader';
import InteractiveBg from './components/common/InteractiveBg';
import WhatsAppButton from './components/common/WhatsAppButton/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Simulate Asset Loading / Branding
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <InteractiveBg />
      {/* mode="wait" is NOT used here because we want the app 
        to be visible BEHIND the loader as it splits open.
      */}
      <AnimatePresence>
        {isLoading && <TogetherTechLoader key="loader" />}
      </AnimatePresence>
      
      {/* The AppRouter is rendered immediately but hidden 
        behind the loader until the split animation happens.
      */}
      <AppRouter />
      <WhatsAppButton />
    </>
  );
}

export default App;
