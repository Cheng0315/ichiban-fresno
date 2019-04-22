import React, {Component} from 'react';
import '../css/plates.css';

const MenuSelectTag = (props) => {  

  return (
    <div className='menu-select-tag form-group'>
      <select className="form-control" onChange={props.handleChange}>
        <option value="1">Teriyaki Bowl</option>
        <option value="2" >Ichiban Rolls & Sushi</option>
        <option value="3">Udon</option>
        <option value="4">Chef's Choice</option>
        <option value="5">Sushi</option>
        <option value="6" >Tempura Plates</option>
        <option value="7">Combination Plates</option>
        <option value="8">Specials</option>
        <option value="9">Dinner Special</option>
        <option value="10" >Side Orders</option>
        <option value="11">Beverages</option>
      </select>
    </div>
  )

}

export default MenuSelectTag