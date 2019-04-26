import React, {Component} from 'react';
import '../css/plateComp.css'

class PlateComp extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      plate: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const plateId = this.props.plateId
    fetch(`/api/plates/${plateId}`)
    .then(response =>  {
      if (response.ok) {
        return response.json();
      } else {
        return {error: true}
      }
    })
    .then(plateData => {
      if (!!plateData.error) {
        this.context.history.push('/')
      } else {
        this.setState({
          plate: plateData
        })
      }
    })
    .catch(error => console.log(error))
  }

  componentDidCatch(error, info) {
    this.setState({
      errorOccured: true
    })
    console.log('oh no')
  }

  render() {
    const hasContent = (content) => {
      return !!content
    }
    
    return (
      <div className='plate-comp  row'>
        <div className='col-lg-6 col-md-6'>
          <img className='img-fluid' src={this.state.plate.image_url} alt={this.state.plate.name}/>
        </div>
        <div className='col-lg-6 col-md-6'>
          <h6>{this.state.plate.name}</h6>
          <div>${this.state.plate.price}</div>
          {hasContent(this.state.plate.description) ? (<h6>{this.state.plate.description}</h6>) : ('')}
          {hasContent(this.state.plate.in) ? (<div>In: {this.state.plate.in}</div>) : ('')}
          {hasContent(this.state.plate.out) ? (<div>Out: {this.state.plate.out}</div>) : ('')}
        </div>
      </div>
    )
  }
}



export default PlateComp