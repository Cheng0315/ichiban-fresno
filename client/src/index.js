import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import menuReducer from './reducers/menuReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(menuReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
