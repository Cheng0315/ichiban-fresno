import React, {Component} from 'react';
import { connect } from 'react-redux';
import ResponsiveHR from './responsiveHR'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/plates.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Plates extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      imageUrl: ''
    };

    this.handleShow = (e) => {
      e.preventDefault()
      this.setState({ show: true, imageUrl: e.target.parentElement.getAttribute('name') });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    let editIcon = '';
    const plates = this.props.sortedPlates
    const hasContent = (content) => {
      return !!content
    }

    if (this.props.auth) {
      editIcon = <h6><span className='edit-plates'><FontAwesomeIcon icon="edit"/></span></h6>
    } 

    return (
      plates.map(plate => 
        <div key={plate.id} className='plate-container fade-in'>
          <div className='plate-content'>
            <div className='plate-img'>
              <a href='' name={plate.image_url} onClick={this.handleShow}><img src={plate.image_url}/></a>
            </div>
            <div className='plate-info'>
              <div className='name-and-price'>
                <h6 className='plate-name'>{plate.name}......................................................................................................</h6>
                <div className='plate-price'>
                  <h6>${plate.price}</h6>
                </div>
                {editIcon}
              </div>
              {hasContent(plate.description) ? (<div>{plate.description}</div>) : ('')}
              {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
              {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
            </div>
          </div>
          <Modal show={this.state.show} onHide={this.handleHide}>
            <img src={this.state.imageUrl}/>
          </Modal>
          < ResponsiveHR plateId={plate.id} plates={this.props.sortedPlates} notLastItem={this.props.notLastItem}/>
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  auth: state.plates.auth
})

export default connect(mapStateToProps)(Plates)