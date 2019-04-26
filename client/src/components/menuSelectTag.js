import React, {Component} from 'react';
import NewPlateForm from '../components/newPlateForm';
import { connect } from 'react-redux';
import '../css/plates.css';

class MenuSelectTag extends Component{  

  render() {
    let newPlateForm = ''

    if (this.props.auth) {
      newPlateForm = <NewPlateForm/>
    }

    return (
      <div className='menu-select-tag form-group'>
        <select className="form-control" onChange={this.props.handleChange}>
          <option value="1">Teriyaki Bowl</option>
          <option value="2" >Ichiban Rolls & Sushi</option>
          <option value="3">Udon</option>
          <option value="4">Sushi</option>
          <option value="5">Tempura Plates</option>
          <option value="6" >Combination Plates</option>
          <option value="7">Chef's Choice</option>
          <option value="8">Specials</option>
          <option value="9">Dinner Special</option>
          <option value="10" >Side Orders</option>
          <option value="11">Beverages</option>
        </select>
        {newPlateForm}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.plates.auth
})

export default connect(mapStateToProps)(MenuSelectTag)