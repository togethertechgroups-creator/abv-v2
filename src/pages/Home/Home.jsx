import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';
import HomeAboutSection from './HomeAboutSection';
import CaseStudiesSection from './CaseStudiesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import FaqSection from './FaqSection';
import TestimonialsSection from './TestimonialsSection';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <HomeAboutSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
