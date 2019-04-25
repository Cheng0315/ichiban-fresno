import React, {Component} from 'react';
import { connect } from 'react-redux';
import ResponsiveHR from './responsiveHR'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/plates.css';
import EditPlateForm from './editPlateForm'


class Plates extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      imageUrl: ''
    };

    this.handleImageShow = (e) => {
      e.preventDefault()
      this.setState({ show: true, imageUrl: e.target.parentElement.getAttribute('name') });
    };

    this.handleImageHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    const plates = this.props.sortedPlates

    return (
      plates.map(plate => 
        <div key={plate.id} className='plate-container fade-in'>
          <div className='plate-content'>
            <div className='plate-img'>
              <a href='/' name={plate.image_url} onClick={this.handleImageShow}><img src={plate.image_url}/></a>
            </div>
            <div className='plate-info'>
              <div className='name-and-price'>
                <h6 className='plate-name'>{plate.name}......................................................................................................</h6>
                <div className='plate-price'>
                  <h6>${plate.price}</h6>
                </div>
                <EditPlateForm plateId={plate.id}/>
              </div>
              <div>{plate.description}</div>
              <div>{plate.in}</div>
              <div>{plate.out}</div>
            </div>
          </div>
          <Modal show={this.state.show} onHide={this.handleImageHide} className='img-modal'>
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