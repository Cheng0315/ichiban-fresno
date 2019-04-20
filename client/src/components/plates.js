import React, {Component} from 'react';

class Plates extends Component {

  render() {
    const plates = this.props.sortedPlates

    return (
      plates.map(plate => <div key={plate.id}><div>{plate.name}</div><div>{plate.price}</div><div>{plate.description}</div><div>{plate.category_id}</div><img src={plate.image_url}/></div>)
    )
  }
}

export default Plates