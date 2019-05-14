import React from 'react';
import Menu from '../containers/menu';
import NavBar from '../components/navBar';
import CarouselComponent from '../components/carousel';
import AboutUs from '../components/aboutUs';
import OpeningHours from '../components/openingHours';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';

const HomePage = () => {
  
  return (
    <React.Fragment>
      <header className="header">
        <NavBar/>
      </header>
      <main className="container">
        <CarouselComponent/>
        <Menu/>
        <OpeningHours/>
        <AboutUs/>
        <ContactUs/>
      </main>
      <footer id='footer'>
        <Footer/>
      </footer>
    </React.Fragment>
  )
}

export default HomePage