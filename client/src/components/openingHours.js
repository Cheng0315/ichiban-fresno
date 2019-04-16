import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const OpeningHours = () => {
  return (
    <div>
      <h3>Opening Hours</h3>
      <Row>
        <Col>
          <div>MONDAY-FRIDAY</div>
          <div>10:30 AM - 8:30 PM</div>
          <div>(Kitchen closes at 8:00 PM)</div>
        </Col>

        <Col>
          <div>SATURDAY</div>
          <div>12:00 PM - 8:30 PM</div>
          <div>(Kitchen closes at 8:00 PM)</div>
        </Col>

        <Col>
          <div>SATURDAY</div>
          <div>CLOSED</div>
        </Col>
      </Row>
    </div>
  )
}

export default OpeningHours