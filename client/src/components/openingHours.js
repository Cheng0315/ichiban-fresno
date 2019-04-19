import React from 'react';
import Row from 'react-bootstrap/Row';
import '../css/openingHours.css';

const OpeningHours = () => {
  return (
    <div id="opening-hours">
      <h2 className='text-center'>Opening Hours</h2>
      <Row>
        <div className='text-center col-md-4 col-sm-12'>
          <div className='opening-hrs-boxes'>
            <h5>MONDAY-FRIDAY</h5>
            <div>10:30 AM - 8:30 PM</div>
            <div>(Kitchen closes at 8:00 PM)</div>
          </div>
        </div>

        <div className='text-center col-md-4 col-sm-12'>
          <div className='opening-hrs-boxes'>
            <h5>SATURDAY</h5>
            <div>12:00 PM - 8:30 PM</div>
            <div>(Kitchen closes at 8:00 PM)</div>
          </div>
        </div>

        <div className='text-center col-md-4 col-sm-12'>
          <div className='opening-hrs-boxes closed-day'>
            <h5>SATURDAY</h5>
            <div>CLOSED</div>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default OpeningHours