import React, {Component} from 'react';
import '../css/plates.css';

class Plates extends Component {

  render() {
    const plates = this.props.sortedPlates
    const hasContent = (content) => {
      return !!content
    }
    const isLastPlate = (plateId, plates, notLastItem) => {
      if (plates[plates.length-1].id === plateId && !!notLastItem) {
        return (
          <div className='row md-sm-hr'>
            <div className='col-lg-8 offset-lg-4'>
              <hr/>
            </div>
          </div>
        )
      } else if (plates[plates.length-1].id !== plateId){
        return (
          <div className='row'>
            <div className='col-lg-8 offset-lg-4'>
              <hr/>
            </div>
          </div>
        )
      }
    }

    return (
      plates.map(plate => 
        <div key={plate.id} className='plates-info'>
          <div className='row'>
            <div className='col-lg-4 col-md-5 d-flex justify-content-end'>
              <img src={plate.image_url}/>
            </div>
            <div className='col-lg-8 col-md-7'>
              <div className='row name-and-price'>
                <h6 className='col-lg-9 col-md-9 col-sm-9 col-9 plate-name'>{plate.name}.................................................</h6>
                <h6 className='col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-end'>${plate.price}</h6>
              </div>
              {hasContent(plate.description) ? (<div>{plate.description}</div>) : ('')}
              {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
              {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
            </div>
          </div>
          {isLastPlate(plate.id, this.props.sortedPlates, this.props.notLastItem)}
        </div>
      )
    )
  }
}

export default Plates