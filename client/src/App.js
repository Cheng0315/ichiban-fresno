import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import SignIn from './components/signIn';
import HomePage from './containers/homePage';
import ShowPagePlate from './containers/showPlatePage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faEnvelope, faEdit, faPencilAlt, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faPhone, faHome, faEnvelope, faEdit, faPencilAlt, faGripLinesVertical)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/admin' render={() => (
            this.props.auth ? (
              <Redirect to="/" />
            ) : (
              <SignIn/>
            )
          )}/>
          <Route exact path='/dishes/:id' component={ShowPagePlate}/>
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.plates.auth
})

export default connect(mapStateToProps)(App);
