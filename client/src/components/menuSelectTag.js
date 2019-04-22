import React, {Component} from 'react';
import '../css/plates.css';

const MenuSelectTag = (props) => {  

  return (
    <select className='menu-select-tag' onChange={props.handleChange}>
      <option value="1" >Ichiban Rolls & Sushi</option>
      <option value="2">Teriyaki Bowl</option>
      <option value="3">Udon</option>
      <option value="4">Sushi</option>
      <option value="5" >Tempura Plates</option>
      <option value="6">Combination Plates</option>
      <option value="7">Specials</option>
      <option value="8">Dinner Special</option>
      <option value="9" >Side Orders</option>
      <option value="10">Beverages</option>
      <option value="11">Chef's Choice</option>
    </select>
  )

}

export default MenuSelectTag