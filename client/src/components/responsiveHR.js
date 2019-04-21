import React from 'react';
import '../css/plates.css';

const ResponsiveHR = (props) => {
  const plateId = props.plateId
  const plates = props.plates
  const notLastItem = props.notLastItem

  if (plates[plates.length-1].id === plateId && !!notLastItem) {
    return (
      <div className='row sm-md-hr'>
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
  } else {
    return null
  }
}


export default ResponsiveHR