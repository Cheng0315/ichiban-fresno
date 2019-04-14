import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plates: []
    }
  }

  componentDidMount() {
    fetch('/api/plates')
      .then(response => response.json())
      .then(json => this.setState({plates: json}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div >
        <Menu allPlates={this.state.plates}/>
      </div>
    );
  }
}

export default App;
