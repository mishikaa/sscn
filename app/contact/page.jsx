import React from 'react'
import '@stylesheets/contact.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Add Font Awesome icons to the library
library.add(faMapMarker, faPhone, faEnvelope, faGithub, faCodepen, faTwitter, faInstagram);

const Contact = () => {
  return (
    <div className="container">
	    <h1 className="title">Get In Touch</h1>
      <div className='content'>
         
	        <form>  
            
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <FontAwesomeIcon className='logo' icon="map-marker" size="sm" />
                  <span className="contact-text place">Hazratganj, Lucknow</span>
                </li>
                <li className="list-item">
                  <FontAwesomeIcon className='logo' icon="phone" size="sm" />
                  <span className="contact-text phone">
                    <a href="tel:+91-9415002825" title="Give me a call">+91-9415002825</a>
                  </span>
                </li>
                <li className="list-item">
                  <FontAwesomeIcon className='logo' icon="envelope" size="sm" />
                  <span className="contact-text gmail">
                    <a href="mailto:balendoo.jaiswal@gmail.com" title="Send me an email">contact@sscnmodel.com</a>
                  </span>
                </li>
              </ul>
      
              <hr />
              <ul className="social-media-list">
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <FontAwesomeIcon className='social-logo' icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <FontAwesomeIcon className='social-logo' icon={faCodepen} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <FontAwesomeIcon className='social-logo' icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <FontAwesomeIcon className='social-logo' icon={faInstagram} />
                  </a>
                </li>
              </ul>
              <hr />
      
              <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>

	          <div className="form-group position-relative">
	          		<label htmlFor="formName" className="d-block">
	          		<i className="icon" data-feather="user"></i>
	          	</label>
	          	<input type="text" id="formName" className="form-control form-control-lg thick" placeholder="Name"/>
	          </div>
      
	          <div className="form-group position-relative">
	          	<label htmlFor="formEmail" className="d-block">
	          		<i className="icon" data-feather="mail"></i>
	          	</label>
	          	<input type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail"/>
	          </div>
      
	          <div className="form-group message">
	          	<textarea id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
	          </div>
	        
	          <div className="text-center">
	          	<button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
	          </div>
	        </form>
	</div>
</div>
  )
}

export default Contact 