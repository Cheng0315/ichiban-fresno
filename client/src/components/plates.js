import React, {Component} from 'react';
import ResponsiveHR from './responsiveHR'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/plates.css';


class Plates extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      imageUrl: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    this.setState({ show: true, imageurl: e.target.parentElement.getAttribute('name')});
    e.preventDefault();
  }

  render() {
    const plates = this.props.sortedPlates
    const hasContent = (content) => {
      return !!content
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
              </div>
              {hasContent(plate.description) ? (<div>{plate.description}</div>) : ('')}
              {hasContent(plate.in) ? (<div>In: {plate.in}</div>) : ('')}
              {hasContent(plate.out) ? (<div>Out: {plate.out}</div>) : ('')}
            </div>
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            {console.log(this.state.imageUrl)}
          </Modal>
          < ResponsiveHR plateId={plate.id} plates={this.props.sortedPlates} notLastItem={this.props.notLastItem}/>
        </div>
      )
    )
  }
}

export default Plates