import AboutIntroSection from './AboutIntroSection';
import MissionVisionValuesSection from './MissionVisionValuesSection';
import HowTogetherTechWorksSection from './HowTogetherTechWorksSection';
import WhoCanUseSection from './WhoCanUseSection';

function About() {
  return (
    <div className="about-page">
      <AboutIntroSection />
      <MissionVisionValuesSection />
      <HowTogetherTechWorksSection />
      <WhoCanUseSection />
    </div>
  );
}

export default About;
