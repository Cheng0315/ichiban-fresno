import React, {Component} from 'react';
import Plates from '../components/plates'
import { connect } from 'react-redux';
import { fetchAllPlates } from '../actions/platesAction'

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


  render() {
    return (
      <div>
        <Plates sortedPlates={this.state.sortedPlates} clickk={this.handleClick}/>
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