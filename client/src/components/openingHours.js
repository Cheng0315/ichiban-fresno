import React from 'react';
import '../css/openingHours.css';

const OpeningHours = () => {
  return (
    <div id="opening-hours">
      <h3 className="text-center">Opening Hours</h3>
      <div className='opening-hours-boxes'>
        <div>
          <div>MONDAY-FRIDAY</div>
          <div>10:30 AM - 8:30 PM</div>
          <div>(Kitchen closes at 8:00 PM)</div>
        </div>
        <div>
          <div>SATURDAY</div>
          <div>12:00 PM - 8:30 PM</div>
          <div>(Kitchen closes at 8:00 PM)</div>
        </div>
        <div>
          <div>SATURDAY</div>
          <div>CLOSED</div>
        </div>
      </div>
    </div>
  )
}

export default OpeningHours