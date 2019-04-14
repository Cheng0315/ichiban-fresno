import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

  renderPlates() {
    return this.state.plates.map(plate => <div><div>{plate.name}</div><div>{plate.price}</div><div>{plate.description}</div></div>)
  }

  render() {
    return (
      <div >
        {this.renderPlates()}
      </div>
    );
  }
}

export default App;
