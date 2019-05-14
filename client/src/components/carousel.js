import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel.css';

const CarouselComponent = () => {
  return (
    <section id='carousel'>
      <Carousel >
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
            <p>Quality Japanese foods that surpasses all expectations</p>
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
            src="https://i1.wp.com/rnrsushi.com/wp-content/uploads/2018/02/Rock-N-Roll-Sushi-34.jpg?fit=959%2C640&ssl=1"
            alt="First slide"
          />

          <Carousel.Caption>
          <h1>Award Winning Restaurant</h1>
            <p>Voted the best Japanese Cuisine in Fresno</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default CarouselComponent