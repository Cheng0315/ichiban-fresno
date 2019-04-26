import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import SignIn from './components/signIn';
import Auth from './modules/Auth';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faEnvelope, faEdit, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Menu from './containers/menu';
import NavBar from './components/navBar';
import CarouselComponent from './components/carousel';
import AboutUs from './components/aboutUs';
import PlateComp from './components/plateComp'
import OpeningHours from './components/openingHours';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

library.add(faPhone, faHome, faEnvelope, faEdit, faPencilAlt)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <header className="header">
              <Route path='/' component={NavBar}/>
            </header>
            <section className="container">
              <Route exact path='/' component={CarouselComponent}/>
              <Route exact path='/' component={Menu}/>
              <Route path='/' component={OpeningHours}/>
              <Route path='/' component={AboutUs}/>
              <Route path='/' component={ContactUs}/>
              <Route exact path='/admin' component={SignIn}/>
              <Route exact path='/dishes/:id' component={PlateComp}/>
            </section>
            <footer id='footer'>
              <Route path='/' component={Footer}/>
            </footer>
        </Router>
      </Provider>
    )
  }
}

export default App;
