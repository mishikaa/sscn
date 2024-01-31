import React from 'react'
// import '../components/animation.scss'
import '@stylesheets/Implementation.scss'

export const Implementation = () => {
    
  return (
    <div className='implementation shapedivider'>
      <div className='img-section'>
        <img src="" alt="implementation" />
      </div>
      <div className="container">
        <h2 className="section-title">Model RWA Implementation</h2>
        <p className="paragraph">
          In the SSCNMODEL RWA initiative, the initial step involves registering the details of each subscriber within the SSCNMODEL database. Following the registration process, a thorough cross-check of each subscriber's information is conducted. Subsequently, the filtering process is implemented in accordance with the Internet Service Provider (ISP) requirements.
        </p>
        <p className="paragraph">
          To achieve this, comprehensive information about every cable, including its origin (ISP) and its route, whether overhead or underground, is gathered. The next phase includes the systematic marking of each cable based on the subscriber details. All recorded information is then fed into a central server.
        </p>
        <p className='paragraph'>
            The primary objective of this model is to enhance the cleanliness and organization of Residential Welfare Associations (RWAs) or societies. By employing this model, a remarkable 98% reduction in cable clutter, also known as "Makarjal," can be achieved within any RWA, leading to a cleaner and more organized living environment.
        </p>
      </div>
    </div>
  );
}