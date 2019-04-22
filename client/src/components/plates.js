import React, {Component} from 'react';
import ResponsiveHR from './responsiveHR'
import '../css/plates.css';

class Plates extends Component {

  render() {
    const plates = this.props.sortedPlates
    const hasContent = (content) => {
      return !!content
    }

    return (
      plates.map(plate => 
        <div key={plate.id} className='plates-info'>
          <div className='pl-container'>
            <div className='pl-img'>
              <img src={plate.image_url}/>
            </div>
            <div className='pl-info'>
              <div className='name-and-price'>
                <h6 className='plate-name'>{plate.name}..............................................................................................</h6>
                <div className='plate-price'>
                  <h6>${plate.price}</h6>
                </div>
              </div>
              {hasContent(plate.description) ? (<div>{plate.description}</div>) : ('')}
              {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
              {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
            </div>
          </div>
          < ResponsiveHR plateId={plate.id} plates={this.props.sortedPlates} notLastItem={this.props.notLastItem}/>
        </div>
      )
    )
  }
}

export default Plates