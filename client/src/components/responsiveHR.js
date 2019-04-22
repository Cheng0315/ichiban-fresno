import React from 'react';
import '../css/plates.css';

const ResponsiveHR = (props) => {
  const plateId = props.plateId
  const plates = props.plates
  const notLastItem = props.notLastItem

  if (plates[plates.length-1].id === plateId && !!notLastItem) {
    return (
      <div className='sm-md-hr'>
        <div className='hl'>
          <hr/>
        </div>
      </div>
    )
  } else if (plates[plates.length-1].id !== plateId){
    return (
      <div className='hl'>
        <hr/>
      </div>
    )
  } else {
    return null
  }
}


export default ResponsiveHR