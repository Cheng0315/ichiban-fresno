import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu'
import NavBar from './components/navBar'

class App extends Component {

  render() {
    return (
      <div >
        <NavBar/>
        <Menu/>
      </div>
    );
  }
}

export default App;
