import React from 'react';
import CaseStudiesSection from '../Home/CaseStudiesSection';

const Work = () => {
  return (
    <div className="work-page">
      <div style={{ paddingTop: '100px' }}> {/* Space for fixed header */}
        <CaseStudiesSection />
      </div>
    </div>
  );
};

export default Work;
