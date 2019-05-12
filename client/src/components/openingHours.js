import React from 'react';
import Row from 'react-bootstrap/Row';
import '../css/openingHours.css';

const OpeningHours = () => {
  return (
    <section id="opening-hours">
      <h2 className='text-center'>Opening Hours</h2>
      <Row>
        <div className='text-center col-lg-4 col-md-12'>
          <div className='opening-hrs-boxes'>
            <h5>MONDAY-FRIDAY</h5>
            <div>10:30 AM - 8:30 PM</div>
          </div>
        </div>

        <div className='text-center col-lg-4 col-md-12'>
          <div className='opening-hrs-boxes'>
            <h5>SATURDAY</h5>
            <div>12:00 PM - 8:30 PM</div>
          </div>
        </div>

        <div className='text-center col-lg-4 col-md-12'>
          <div className='opening-hrs-boxes closed-day'>
            <h5>SUNDAY</h5>
            <div>CLOSED</div>
          </div>
        </div>
      </Row>
    </section>
  )
}

export default OpeningHours