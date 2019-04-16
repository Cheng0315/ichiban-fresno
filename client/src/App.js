import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu'
import NavBar from './components/navBar'
import CarouselComponent from './components/carousel'


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <CarouselComponent/>
          <Menu/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
