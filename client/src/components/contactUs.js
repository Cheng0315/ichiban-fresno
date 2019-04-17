import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactUs = () => {
  return (
    <div id="contact-us">
      <h2 className="text-center">Contact Us</h2>
      <Row>
        <Col>
          <div>
            <div><strong>Address</strong></div>
            <div>4863 E Butler Ave,</div>
            <div>Fresno, CA 93727</div>
          </div>
          <div>
            <div><strong>Phone</strong></div>
            <div>(559) 255-7615</div>
          </div>
          <div>
            <div><strong>Email</strong></div>
            <div>ichibanfresno@gmail.com</div>
          </div>
        </Col>

        <Col>
          <div>
            <iframe width="100%" height="450"
              src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.REACT_APP_GOOGLE_MAP_API_KEY + "&q=Ichiban,Fresno+CA"}>
            </iframe>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactUs