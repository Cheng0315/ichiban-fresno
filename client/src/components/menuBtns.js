import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import NewPlateForm from '../components/newPlateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/menu.css';

class MenuBtns extends Component {

  render() {
  let newPlateForm = ''

  if (this.props.auth) {
    newPlateForm = <NewPlateForm/>
  }

  return (
    <div className='menu-nav'>
      <div className='menu-nav-top'>
        <Button variant="link" key='1' value='1' onClick={this.props.handleClick}>Teriyaki Bowl</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='2' value='2' onClick={this.props.handleClick}>Ichiban Rolls & Sushi</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='3' value='3' onClick={this.props.handleClick}>Udon</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='4' value='4' onClick={this.props.handleClick}>Sushi</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='5' value='5' onClick={this.props.handleClick}>Tempura Plates</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='6' value='6' onClick={this.props.handleClick}>Combination Plates</Button>
      </div>
      <div className='menu-nav-bottom'>
        <Button variant="link" key='7' value='7' onClick={this.props.handleClick}>Chef's Choice</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='8' value='8' onClick={this.props.handleClick}>Specials</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='9' value='9' onClick={this.props.handleClick}>Dinner Special</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='10' value='10' onClick={this.props.handleClick}>Side Orders</Button><span><FontAwesomeIcon icon="grip-lines-vertical" size='md'/></span>
        <Button variant="link" key='11' value='11' onClick={this.props.handleClick}>Beverages</Button>
        {newPlateForm}
      </div>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  auth: state.plates.auth
})

export default connect(mapStateToProps)(MenuBtns)