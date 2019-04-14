import React, {Component} from 'react';
import Plates from '../components/plates'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Plates allPlates={this.props.allPlates}/>
      </div>
    )
  }
}