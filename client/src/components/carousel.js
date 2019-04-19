import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel.css';

const CarouselComponent = () => {
  return (
    <Carousel id='carousel'>
      <Carousel.Item className='carouselHeight'>
        <img
          className="imgHeight carousel-img-l"
          src="https://mms17-makemysushi.netdna-ssl.com/wp-content/uploads/2017/05/DSC04685-01.jpeg"
          alt="First slide"
        />

         <img
          className="imgHeight carousel-img-r"
          src="https://res.cloudinary.com/simpleview/image/upload/crm/frisco/Sushi0-380f05265056a36_380f06be-5056-a36a-073ed8db1c463d56.jpg"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          <h1>Welcome to Ichiban Restaurant</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carouselHeight'>
        <img
          className="imgHeight carousel-img-l"
          src="https://res.cloudinary.com/simpleview/image/upload/crm/frisco/Sushi0-380f05265056a36_380f06be-5056-a36a-073ed8db1c463d56.jpg"
          alt="Third slide"
        />

        <img
          className="imgHeight carousel-img-r"
          src="https://mms17-makemysushi.netdna-ssl.com/wp-content/uploads/2017/05/DSC04685-01.jpeg"
          alt="First slide"
        />

        <Carousel.Caption>
        <h1>Welcome to Ichiban Restaurant</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carouselHeight'>
        <img
          className="imgHeight carousel-img-l"
          src="https://cdn2.mypcoskitchen.com/wp-content/uploads/2017/09/sushi-mpk-1024x683.jpg"
          alt="Third slide"
        />

        <img
          className="imgHeight carousel-img-r"
          src="https://mms17-makemysushi.netdna-ssl.com/wp-content/uploads/2017/05/DSC04685-01.jpeg"
          alt="First slide"
        />

        <Carousel.Caption>
        <h1>Welcome to Ichiban Restaurant</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent