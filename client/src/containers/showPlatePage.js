import React, { Component } from 'react';
import PlateComp from '../components/plateComp';
import NavBar from '../components/navBar';
import AboutUs from '../components/aboutUs';
import OpeningHours from '../components/openingHours';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';
import Note from '../components/note'

class ShowPagePlate extends Component {

  render() {
    const plateId = this.props.match.params.id

    return (
      <React.Fragment>
        <header className="header">
          <NavBar/>
        </header>
        <Note/>
        <main className="container">
          <PlateComp plateId={plateId}/>
          <hr/>
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
}

export default ShowPagePlate