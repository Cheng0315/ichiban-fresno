import React, {Component} from 'react';
import createNewPlate from '../actions/createNewPlates'
import uploadImg from '../actions/uploadImg'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPlateForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData();
    //const { price, name, } = e.target.elements
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
    let loading;

    if (!!this.props.loadingPlates) {
      loading = <span ><FontAwesomeIcon icon="spinner" className='fa fa-spinner fa-spin'/></span>
    }

    return (
      <div className='add-new-dish'>
        <Button variant="primary" onClick={this.handleShow}>
          Add New Dish
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} className='new-plate-modal' centered>
          <Form onSubmit={this.handleSubmit} className='container'>
            <h1>Add New Dish</h1>
            <Form.Group controlId="plate-name">
              <Form.Control type="text" placeholder="Dish's name" name='name' ref='name' required/>
            </Form.Group>
            <Form.Group controlId="plate-description">
              <Form.Control as="textarea" rows="4" placeholder="Description" name='description' ref='description'/>
            </Form.Group>
            <Form.Group controlId="plate-price">
              <Form.Control type="number" step='0.01' placeholder="Price" name='price' ref='price' required/>
            </Form.Group>
            <Form.Group controlId="plate-in">
              <Form.Control type="text" placeholder="In" name='in' ref='in'/>
            </Form.Group>
            <Form.Group controlId="plate-out">
              <Form.Control type="text" placeholder="Out" name='out' ref='out'/>
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
            <input type="file" className='upload-img' onChange={this.props.uploadImg} required/>
            <Button variant="primary" className='btn-block' type="submit">
              {loading} &nbsp;Create Dish
            </Button>
        </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedFile: state.plates.selectedFile,
  loadingPlates: state.plates.loadingPlates
})

export default connect(mapStateToProps, {createNewPlate, uploadImg})(NewPlateForm)