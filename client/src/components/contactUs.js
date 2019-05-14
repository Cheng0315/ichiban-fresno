import React from 'react';
import '../css/contactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactUs = () => {
  return (
    <section id="contact-us">
      <h2 className="text-center">Contact Us</h2>
      <div className='row restaurant-info'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h4 className="text-center">Restaurant's Information</h4>
          <div className='restaurant-info-style'>
            <div className='restaurant-phone'>
              <p><span><FontAwesomeIcon icon="phone"/></span><strong> Phone</strong></p>
              <p>(559) 255-7615</p>
            </div>
            <div className='restaurant-email'>
              <p><span><FontAwesomeIcon icon="envelope"/></span><strong> Email</strong></p>
              <p>ichibanfresno@gmail.com</p>
            </div>
            <div className='restaurant-address'>
              <p><span><FontAwesomeIcon icon="home"/></span><strong> Address</strong></p>
              <p>4863 E Butler Ave,</p>
              <p>Fresno, CA 93727</p>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h4 className="text-center">Map</h4>
          <iframe width="100%" height="330" title='map'
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDi6RtDwBm879Nq0jxml7jdvhratKgdGs0&q=Ichiban,Fresno+CA">
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default ContactUs