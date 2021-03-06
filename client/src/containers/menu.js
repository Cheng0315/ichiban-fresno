import React, {Component} from 'react';
import Plates from '../components/plates';
import { connect } from 'react-redux';
import fetchPlates from '../actions/fetchPlates'
import sortPlates from '../actions/sortPlates'
import MenuBtns from '../components/menuBtns';
import MenuSelectTag from '../components/menuSelectTag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/menu.css';

class Menu extends Component {

  componentDidMount() {
    this.props.fetchPlates();
  }

  handleClick = (e) => {
    this.props.sortPlates(parseInt(e.target.value), this.props.plates)
  }

  render() {
    let fetchingData = ''; 

    if (!!this.props.loadingPlates) {
      fetchingData = <h5 className='fetching-data'><span ><FontAwesomeIcon icon="spinner" className='fa fa-spinner fa-spin'/></span> &nbsp;Retrieving Data</h5>
    } 

    return (
      <section id="menu">
        <h2 className="text-center">Browse Our Menu</h2>
        <div className='menu-inner-container'>
          <MenuSelectTag handleChange={this.handleClick}/>
          <MenuBtns handleClick={this.handleClick}/>
          <div className='menu-content'>
            {fetchingData}
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
      </section>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates,
  sortedPlates: state.plates.sortedPlates,
  auth: state.plates.auth,
  loadingPlates: state.plates.loadingPlates
})


export default connect(mapStateToProps, {fetchPlates, sortPlates})(Menu)