import React from 'react'
import '@stylesheets/about.scss'
// import '../components/animation.scss'

const About = () => {
    const imageUrls = [
    '/cable/1.jpeg',
    '/cable/2.jpg',
    '/cable/3.jpg',
    '/cable/4.jpg',
    '/cable/5.jpeg',
    '/cable/6.jpg',
    '/cable/7.jpg',
    '/cable/8.jpg'
  ];
  
  return (
    <>
    <div className='about'>
      <div className='bg-shape-3'></div>
      <div className='bg-shape-4'></div>
      <div className="container">
        <h2 className="section-title">Present Scenario of Network in India</h2>
        <p className="paragraph">
          The prevailing norm among Internet Service Providers (ISPs) and Cable Operators follows a consistent pattern. A single operator typically designates 30 to 60 channel partners or Direct Sales Agents (DSAs). Each of these channel partners or DSAs operates a cable exchange connecting to the end-users. Unfortunately, these smaller vendors frequently encounter financial difficulties, leading to a relatively short business lifespan of 6 months to 1 year, primarily due to recurrent cable damages caused by electrical department activities.
        </p>
      </div>
      <div className="gallery">
        {imageUrls.map((url, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            <img src={url} alt="" />
          </span>
        ))}
      </div>
      <div className="container">
        <p className="paragraph">
          To address this challenge, the SSCNModel was introduced. This model encompasses several key components, including the compilation of operator lists, marking of cables, subscriber filtering based on ISP criteria, record maintenance, disclosure of cables both underground and overhead, strategic route planning, and the unification of all subscribers through a shared distribution box. Adoption of this model results in the removal of 98% of cables from poles, significantly enhancing the overall network scenario.
        </p>
      </div>
    </div>
    </>
  );
}

export default About