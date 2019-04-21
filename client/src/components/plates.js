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
          <div className='row col-lg-4 col-md-12 justify-content-end'>
            <img src={plate.image_url}/>
          </div>
          <div className='col-lg-8 col-md-12'>
            <div>
              <div className='row name-and-price'>
                <h6 className='col-lg-9 col-md-9 col-sm-9 col-9 plate-name'>{plate.name}.................................................</h6>
                <h6 className='col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-end'>${plate.price}</h6>
              </div>
              {hasContent(plate.description) ? (<div>{plate.description}</div>) : ('')}
              {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
              {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
            </div>
          </div>
        </div>
      )
    )
  }
}

export default Plates