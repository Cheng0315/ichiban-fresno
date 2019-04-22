import React, {Component} from 'react';
import Plates from '../components/plates';
import { connect } from 'react-redux';
import { fetchAllPlates } from '../actions/platesAction';
import MenuBtns from '../components/menuBtns';
import '../css/menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      plates: [],
      sortedPlates: []
    }
  }

  componentDidMount() {
    fetch('/api/plates')
      .then(response => response.json())
      .then(platesData => this.setState({plates: platesData, sortedPlates: platesData.filter(function(ele){return ele.category_id === 1})}))
      .catch(error => console.log(error))
  }

  filterPlates = (e) => {
    return function(ele) {
      return ele.category_id === parseInt(e.target.value)
    }
  }

  handleClick = (e) => {
    this.setState({
      sortedPlates: this.state.plates.filter(this.filterPlates(e))
    })
  }

  render() {
    return (
      <div id="menu">
        <h2 className="text-center">Browse Our Menu</h2>
        <div className='menu-inner-container'>
          <MenuBtns handleClick={this.handleClick}/>
          <div className='listing-items'>
            <div className='row list-plates'>
              <div className='col-lg-6 col-md-8'>
                <Plates notLastItem={true} sortedPlates={this.state.sortedPlates.filter(function(ele, index){return index % 2 === 0})}/>
              </div>
              <div className='col-lg-6 col-md-8'>
                <Plates notLastItem={false} sortedPlates={this.state.sortedPlates.filter(function(ele, index){return index % 2 === 1})}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    plates: state.plates,
    sortedPlates: state.sortedPlates,
    category: state.category
  }
}

/*const mapDispatchToProps = dispatch => {
  return {
    fetchAllPlates: () => dispatch(fetchAllPlates())
  }
}*/

export default connect(mapStateToProps, {fetchAllPlates})(Menu)