import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu';
import NavBar from './components/navBar';
import CarouselComponent from './components/carousel';
import AboutUs from './components/aboutUs';
import OpeningHours from './components/openingHours';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <CarouselComponent/>
          <Menu/>
          <OpeningHours/>
          <AboutUs/>
          <ContactUs/>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
