import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu'
import NavBar from './components/navBar'
import CarouselComponent from './components/carousel'
import AboutUs from './components/aboutUs'


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <CarouselComponent/>
          <Menu/>
          <AboutUs/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
