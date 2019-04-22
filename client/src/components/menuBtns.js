import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/menu.css';

const MenuBtns = (props) => {

  return (
    <div className='menu-nav'>
      <div className='menu-nav-top'>
        <Button variant="link" key='1' value='1' onClick={props.handleClick}>Teriyaki Bowl</Button>
        <Button variant="link" key='2' value='2' onClick={props.handleClick}>Ichiban Rolls & Sushi</Button>
        <Button variant="link" key='3' value='3' onClick={props.handleClick}>Udon</Button>
        <Button variant="link" key='4' value='4' onClick={props.handleClick}>Sushi</Button>
        <Button variant="link" key='5' value='5' onClick={props.handleClick}>Tempura Plates</Button>
        <Button variant="link" key='6' value='6' onClick={props.handleClick}>Combination Plates</Button>
      </div>
      <div className='menu-nav-bottom'>
        <Button variant="link" key='7' value='7' onClick={props.handleClick}>Chef's Choice</Button>
        <Button variant="link" key='8' value='8' onClick={props.handleClick}>Specials</Button>
        <Button variant="link" key='9' value='9' onClick={props.handleClick}>Dinner Special</Button>
        <Button variant="link" key='10' value='10' onClick={props.handleClick}>Side Orders</Button>
        <Button variant="link" key='11' value='11' onClick={props.handleClick}>Beverages</Button>
      </div>
    </div>
  )

}

export default MenuBtns