import FeaturesListSection from './FeaturesListSection';
// import FeatureCardsSection from './FeatureCardsSection';
import FeatureHero from './FeatureHero';
function Features() {
  return (
    <div className="features-page">
      <FeatureHero />
      <FeaturesListSection />
      {/* <FeatureCardsSection /> */}
    </div>
  );
}

export default Features;
