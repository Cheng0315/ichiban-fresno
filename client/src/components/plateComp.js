import React, {Component} from 'react';
import { withRouter } from "react-router";
import '../css/plateComp.css'

class PlateComp extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      plate: ''
    }
  }

  plateIdIsNum = (plateId) => {
    const result = plateId.match(/^\d+$/g);
    return result;
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.plateIdIsNum(this.props.plateId)) {
      const plateId = this.props.plateId;

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
          this.props.history.push('/')
        } else {
          this.setState({
            plate: plateData
          })
        }
      })
      .catch(error => console.log(error))
    } else {
      this.props.history.push('/')
    }
  }
  

  render() {
    const hasContent = (content) => {
      return !!content
    }
    
    return (
      <section className='plate-comp row'>
        <div className='col-lg-5 col-md-5'>
          <img className='img-fluid' src={this.state.plate.image_url} alt={this.state.plate.name}/>
        </div>
        <div className='col-lg-7 col-md-7'>
          <h6>{this.state.plate.name}</h6>
          <div>${this.state.plate.price}</div>
          {hasContent(this.state.plate.description) ? (<h6>{this.state.plate.description}</h6>) : ('')}
          {hasContent(this.state.plate.in) ? (<div>In: {this.state.plate.in}</div>) : ('')}
          {hasContent(this.state.plate.out) ? (<div>Out: {this.state.plate.out}</div>) : ('')}
        </div>
      </section>
    )
  }
}

export default withRouter(PlateComp)