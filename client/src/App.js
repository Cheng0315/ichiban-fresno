import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu';
import NavBar from './components/navBar';
import CarouselComponent from './components/carousel';
import AboutUs from './components/aboutUs';
import OpeningHours from './components/openingHours';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faHome, faEnvelope)

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
        <footer id='footer'>
          <Footer/>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
