import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePageContainer from './containers/homePageContainer'
import SignIn from './components/signIn';
import Auth from './modules/Auth';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faPhone, faHome, faEnvelope)

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
  }

  render() {
    return (
      <Router>
        <Route exact path='/' component={HomePageContainer}/>
        <Route exact path='/admin' component={SignIn}/>
      </Router>
    )
  }
}

export default App;
