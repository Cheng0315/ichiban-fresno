import React, {Component} from 'react';
import plateComp from '../css/plateComp.css'

class PlateComp extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      plate: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const plateId = this.props.match.params.id
    fetch(`/api/plates/${plateId}`)
    .then(response => response.json())
    .then(plateData => 
      this.setState({
        plate: plateData
      }))
    .catch(error => console.log(error))
  }

  render() {
    const hasContent = (content) => {
      return !!content
    }
    
    return (
      <div className='plate-comp  row'>
        <div className='col-lg-6 col-md-6'>
          <img className='img-fluid' src={this.state.plate.image_url}/>
        </div>
        <div className='col-lg-6 col-md-6'>
          <h4>{this.state.plate.name}</h4>
          <h6>${this.state.plate.price}</h6>
          {hasContent(this.state.plate.description) ? (<h6>{this.state.plate.description}</h6>) : ('')}
          {hasContent(this.state.plate.in) ? (<h6>In: {this.state.plate.in}</h6>) : ('')}
          {hasContent(this.state.plate.out) ? (<h6>Out: {this.state.plate.out}</h6>) : ('')}
        </div>
      </div>
    )
  }
}



export default PlateComp