import React, {Component} from 'react';
import Plates from '../components/plates';
import { connect } from 'react-redux';
import fetchPlates from '../actions/plateActions'
import MenuBtns from '../components/menuBtns';
import MenuSelectTag from '../components/menuSelectTag'
import '../css/menu.css';

class Menu extends Component {

  componentDidMount() {
    this.props.fetchPlates();
  }

  filterPlates = (e) => {
    return function(ele) {
      return ele.category_id === parseInt(e.target.value)
    }
  }

  handleClick = (e) => {
    this.setState({
      sortedPlates: this.props.plates.filter(this.filterPlates(e))
    })
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
                <Plates notLastItem={true} sortedPlates={this.props.plates.filter(function(ele, index){return index % 2 === 0})}/>
              </div>
              <div className='right-col'>
                <Plates notLastItem={false} sortedPlates={this.props.plates.filter(function(ele, index){return index % 2 === 1})}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates
})


export default connect(mapStateToProps, {fetchPlates})(Menu)