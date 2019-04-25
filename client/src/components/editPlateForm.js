import React, {Component} from 'react';
import createNewPlate from '../actions/createNewPlates'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditPlateForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      show: false,
      name: '',
      description: '',
      in: '',
      out: '',
      price: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    e.preventDefault();
    
    let plate = this.props.plates.find(plate => plate.id == this.props.plateId)

    this.setState({ 
      show: true,
      name: plate.name,
      description: plate.description,
      in: plate.in,
      out: plate.our,
      price: plate.price
    });
  }



  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData();
    const name = e.target.elements.name.value; 
    const price= e.target.elements.price.value;
    const description= e.target.description.value;
    const inside = e.target.elements.in.value;
    const outside = e.target.elements.out.value;
    const category_id = e.target.elements.category_id.value;

    fd.append('image', this.props.selectedFile, this.props.selectedFile.name);
    fd.append('plate[name]', name);
    fd.append('plate[price]', price);
    fd.append('plate[in]', inside);
    fd.append('plate[out]', outside);
    fd.append('plate[category_id]', category_id);
    fd.append('plate[description]', description);

    this.props.createNewPlate(fd, this.handleClose);
  }

  render() {
    let editIcon = '';
    if (this.props.auth) {
      editIcon = <a href='/' onClick={this.handleShow}><h6><span className='edit-plates'><FontAwesomeIcon icon="edit"/></span></h6></a>
    }

    return (
      <React.Fragment>
        {editIcon}
        <Modal show={this.state.show} onHide={this.handleClose} className='edit-plate-modal'>
        <Form onSubmit={this.handleSubmit} className='container'>
            <h1>Edit Dish</h1>
            <Form.Group controlId="plate-name">
              <Form.Control type="text" value={this.state.name} name='name' ref='name' onChange={this.handleInputChange} required/>
            </Form.Group>
            <Form.Group controlId="plate-description">
              <Form.Control type="text" value={this.state.description} name='description' ref='description' onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="plate-in">
              <Form.Control type="text" value={this.state.in} name='in' ref='in' onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="plate-out">
              <Form.Control type="text" value={this.state.out} name='out' ref='out' onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="plate-price">
              <Form.Control type="number" value={this.state.price} step='0.01' name='price' ref='price' onChange={this.handleInputChange} required/>
            </Form.Group>
            <select className="form-control" name='category_id'>
              <option value="1">Teriyaki Bowl</option>
              <option value="2" >Ichiban Rolls & Sushi</option>
              <option value="3">Udon</option>
              <option value="4">Sushi</option>
              <option value="5">Tempura Plates</option>
              <option value="6" >Combination Plates</option>
              <option value="7">Chef's Choice</option>
              <option value="8">Specials</option>
              <option value="9">Dinner Special</option>
              <option value="10" >Side Orders</option>
              <option value="11">Beverages</option>
            </select>
            <input type="file" className='upload-img' onChange={this.props.fileSelectedHandler} required/>
            <Button variant="primary" className='btn-block' type="submit">
              Update Dish
            </Button>
        </Form>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates,
  auth: state.plates.auth
})

export default connect(mapStateToProps)(EditPlateForm)