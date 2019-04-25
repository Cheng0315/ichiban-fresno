import React, {Component} from 'react';
import Plates from '../components/plates';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import fetchPlates from '../actions/fetchPlates'
import sortPlates from '../actions/sortPlates'
import MenuBtns from '../components/menuBtns';
import MenuSelectTag from '../components/menuSelectTag'
import NewDishForm from '../components/newDishForm';
import '../css/menu.css';

class Menu extends Component {

  constructor()  {
    super();
    this.state = {
      selectedFile: {}
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
    console.log(this.state.selectedFile)
  }
  
  componentDidMount() {
    this.props.fetchPlates();
  }

  handleClick = (e) => {
    this.props.sortPlates(parseInt(e.target.value), this.props.plates)
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
            <NewDishForm fileSelectedHandler={this.fileSelectedHandler} selectedFile={this.state.selectedFile}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates,
  sortedPlates: state.plates.sortedPlates,
})


export default connect(mapStateToProps, {fetchPlates, sortPlates})(Menu)