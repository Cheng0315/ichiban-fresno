import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import HomePageContainer from './containers/homePageContainer'
import PlateShowPage from './components/plateShowPage'
import SignIn from './components/signIn';
import Auth from './modules/Auth';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faEnvelope, faEdit, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faPhone, faHome, faEnvelope, faEdit, faPencilAlt)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePageContainer}/>
            <Route exact path='/admin' component={SignIn}/>
            <Route exact path='/dishes/:id' component={PlateShowPage}/>
          </Switch>
        </Router>
        
      </Provider>
    )
  }
}

export default App;
