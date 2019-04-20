import React, {Component} from 'react';
import '../css/plates.css';

class Plates extends Component {

  render() {
    const leftColumnPlates = this.props.sortedPlates.filter(function(ele){return ele.id % 2 === 1})
    const rightColumnPlates = this.props.sortedPlates.filter(function(ele){return ele.id % 2 === 0})
    const hasContent = (content) => {
      return !!content
    }

    return (
      <div className='row list-plates'>
        <div className='col-lg-6'>
          {leftColumnPlates.map(plate => 
            <div key={plate.id} className='row'>
              <div className='col-lg-4'>
                <img src={plate.image_url}/>
              </div>
              <div className='col-lg-8'>
                <div>{plate.name}</div><div>{plate.price}</div>
                <div>{plate.description}</div>
                {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
                {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
                <div>{plate.category_id}</div>
              </div>
            </div>)
          }
        </div>

        <div className='col-lg-6'>
          {rightColumnPlates.map(plate => 
            <div key={plate.id} className='row'>
              <div className='col-lg-4'>
                <img src={plate.image_url}/>
              </div>
              <div className='col-lg-8'>
                <div>{plate.name}</div><div>{plate.price}</div>
                <div>{plate.description}</div>
                {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
                {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
                <div>{plate.category_id}</div>
              </div>
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default Plates