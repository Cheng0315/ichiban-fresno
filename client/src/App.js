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
        <header className="header">
          <NavBar/>
        </header>
        <section className="container">
          <CarouselComponent/>
          <Menu/>
          <OpeningHours/>
          <AboutUs/>
          <ContactUs/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
