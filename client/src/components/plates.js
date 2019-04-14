import React, {Component} from 'react';

export default class Plates extends Component {
  render() {
    const plates = this.props.allPlates.filter(function(ele){return ele.category_id === 1})
    return (
      plates.map(plate => <div><div>{plate.name}</div><div>{plate.price}</div><div>{plate.description}</div></div>)
    )
  }
}