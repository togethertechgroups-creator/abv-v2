import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 

// Components
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import PageWrapper from '../components/common/PageWrapper';
// import PatrolAnimation from '../components/common/PatrolAnimation';

// Pages
import Home from '../pages/Home/Home';
import Features from '../pages/Features/Features';
import Pricing from '../pages/Pricing/Pricing';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Subscription from '../pages/Subscription/Subscription';
import Work from '../pages/Work/Work';

// We need this separate component to use the 'useLocation' hook
// because you can't use the hook inside the same component that declares the <Router>
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures the old page fades out BEFORE the new one fades in
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