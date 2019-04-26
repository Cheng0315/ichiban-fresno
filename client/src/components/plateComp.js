import React, {Component} from 'react';

class PlateComp extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      plate: ''
    }
  }

  componentDidMount() {
    const plateId = this.props.plateId
    console.log(plateId)
    fetch(`/api/plates/${plateId}`)
    .then(response => response.json())
    .then(plateData => 
      this.setState({
        plate: plateData
      }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div>{this.state.plate.name}</div>
        <div>{this.state.plate.price}</div>
        <div>{this.state.plate.description}</div>
        <div>{this.state.plate.in}</div>
        <div>{this.state.plate.out}</div>
        <div>{this.state.plate.category_id}</div>
      </div>
    )
  }
}



export default PlateComp