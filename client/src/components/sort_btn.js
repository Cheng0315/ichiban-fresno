import React, {Component} from 'react';

class SortBtn extends Component {
  render() {
    const categories = ['Ichiban Rolls & Sushi', 'Teriyaki Bowl', 'Udon', 'Sushi', 'Tempura Plates', 'Combination Plate', 'Specials', 'Dinner Special', 'Side Orders', 'Beverages', "Chef's Choice"]

    return (
      categories.map((category,index) => <button key={index} value={index + 1} onClick={this.props.handleClick}>{category}</button>)
    )
  }
}

export default SortBtn