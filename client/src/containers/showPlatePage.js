import React, { Component } from 'react';
import PlateComp from '../components/plateComp';
import NavBar from '../components/navBar';
import AboutUs from '../components/aboutUs';
import OpeningHours from '../components/openingHours';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';

class ShowPagePlate extends Component {

  render() {
    const plateId = this.props.match.params.id

    return (
      <React.Fragment>
        <header className="header">
          <NavBar/>
        </header>
        <section className="container">
          <PlateComp plateId={plateId}/>
          <OpeningHours/>
          <AboutUs/>
          <ContactUs/>
        </section>
        <footer id='footer'>
          <Footer/>
        </footer>
      </React.Fragment>
    )
  }
}

export default ShowPagePlate