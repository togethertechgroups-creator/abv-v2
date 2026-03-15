import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 
import React, { lazy, Suspense } from 'react';

// Components
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import PageWrapper from '../components/common/PageWrapper';
// import PatrolAnimation from '../components/common/PatrolAnimation';

// Pages
const Home = lazy(() => import('../pages/Home/Home'));
const Features = lazy(() => import('../pages/Features/Features'));
const Pricing = lazy(() => import('../pages/Pricing/Pricing'));
const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Subscription = lazy(() => import('../pages/Subscription/Subscription'));
const Work = lazy(() => import('../pages/Work/Work'));

// We need this separate component to use the 'useLocation' hook
// because you can't use the hook inside the same component that declares the <Router>
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures the old page fades out BEFORE the new one fades in
    <Suspense fallback={<div style={{display:'flex',justifyContent:'center',padding:'3rem',fontWeight:'bold'}}>Loading...</div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* Wrap EVERY page in PageWrapper to get the slide/fade effect */}
          <Route path="/" element={
            <PageWrapper><Home /></PageWrapper>
          } />
          
          <Route path="/features" element={
            <PageWrapper><Features /></PageWrapper>
          } />
          
          <Route path="/pricing" element={
            <PageWrapper><Pricing /></PageWrapper>
          } />
          
          <Route path="/about" element={
            <PageWrapper><About /></PageWrapper>
          } />
          
          <Route path="/contact" element={
            <PageWrapper><Contact /></PageWrapper>
          } />
          
          <Route path="/subscription" element={
            <PageWrapper><Subscription /></PageWrapper>
          } />

          <Route path="/work" element={
            <PageWrapper><Work /></PageWrapper>
          } />

        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      <main>
        <AnimatedRoutes />
        {/* <PatrolAnimation /> */}
      </main>
      
      <Footer />
    </Router>
  );
}

export default AppRouter;
