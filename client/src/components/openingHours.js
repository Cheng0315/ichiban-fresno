import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OpeningHours = () => {
  return (
    <div id="opening-hours">
      <h2 className='text-center'>Opening Hours</h2>
      <Row>
        <Col className='text-center'>
          <h5>MONDAY-FRIDAY</h5>
          <div>10:30 AM - 8:30 PM</div>
          <div>(Kitchen closes at 8:00 PM)</div>
        </Col>

        <Col className='text-center'>
          <h5>SATURDAY</h5>
          <div>12:00 PM - 8:30 PM</div>
          <div>(Kitchen closes at 8:00 PM)</div>
        </Col>

        <Col className='text-center'>
          <h5>SATURDAY</h5>
          <div>CLOSED</div>
        </Col>
      </Row>
    </div>
  )
}

export default OpeningHours