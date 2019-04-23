import React, {Component} from 'react';
import Plates from '../components/plates';
import { connect } from 'react-redux';
import fetchPlates from '../actions/plateActions'
import sortPlates from '../actions/sortPlates'
import MenuBtns from '../components/menuBtns';
import MenuSelectTag from '../components/menuSelectTag'
import '../css/menu.css';

class Menu extends Component {

  componentDidMount() {
    this.props.fetchPlates();
    this.props.sortPlates(1);
  }

  filterPlates = (e) => {
    return function(ele) {
      return ele.category_id === parseInt(e.target.value)
    }
  }

  handleClick = (e) => {
    this.props.sortPlates(parseInt(e.target.value))
  }

  render() {
    return (
      <div id="menu">
        <h2 className="text-center">Browse Our Menu</h2>
        <div className='menu-inner-container'>
          <MenuSelectTag handleChange={this.handleClick}/>
          <MenuBtns handleClick={this.handleClick}/>
          <div className='menu-content'>
            <div className='list-plates'>
              <div className='left-col'>
                <Plates notLastItem={true} sortedPlates={this.props.sortedPlates.filter(function(ele, index){return index % 2 === 0})}/>
              </div>
              <div className='right-col'>
                <Plates notLastItem={false} sortedPlates={this.props.sortedPlates.filter(function(ele, index){return index % 2 === 1})}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates,
  sortedPlates: state.plates.sortedPlates
})


export default connect(mapStateToProps, {fetchPlates, sortPlates})(Menu)