import React, {Component} from 'react';
import Plates from '../components/plates';
import { connect } from 'react-redux';
import { fetchAllPlates } from '../actions/platesAction';
import MenuBtns from '../components/menuBtns';

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
        <MenuBtns handleClick={this.handleClick}/>
        <Plates sortedPlates={this.state.sortedPlates}/>
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