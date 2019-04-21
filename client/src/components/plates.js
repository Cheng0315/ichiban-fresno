import React, {Component} from 'react';
import '../css/plates.css';

class Plates extends Component {

  render() {
    const plates = this.props.sortedPlates
    const hasContent = (content) => {
      return !!content
    }

    return (
      plates.map(plate => 
        <div key={plate.id} className='row plates-info'>
          <div className='col-lg-4 plates-img'>
            <img src={plate.image_url}/>
          </div>
          <div className='col-lg-8'>
            <div className='row '>
              <h6 className='col-lg-8 plate-name'>{plate.name}....................................</h6>
              <h6 className='col-lg-4'>${plate.price}</h6>
            </div>
            {hasContent(plate.description) ? (<div>{plate.description}</div>) : ('')}
            {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
            {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
          </div>
        </div>
      )
    )
  }
}

export default Plates