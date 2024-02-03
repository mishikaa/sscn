// src/components/Hero.js

import React from 'react';

// import './animation.scss';
import '@stylesheets/Hero.scss';
import '@stylesheets/animation.scss';
// import RightHeroSection from './RightHeroSection';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="shape1"></div>
        <div className="shape2"></div>
      <div className='left-panel'>
        <h1 className='heading'>Transform Your Cable Networks with <span>SSCNMODEL</span></h1>
        <div className='left-panel_section'>
          <p>Welcome to SSCNMODEL, a revolutionary solution that enhances cable network efficiency, reduces costs, and beautifies your community.
            <br/>Explore the future of streamlined telecommunications with us.</p>
          <button>Explore Now {`>`}</button>
        </div>
      </div>

      <div className="right-panel">
         <div className='bg-shape-1'></div>
         <div className='bg-shape-2'></div>
         {/* <RightHeroSection /> */}
      </div>
    </div>
  );
};

export default Hero;