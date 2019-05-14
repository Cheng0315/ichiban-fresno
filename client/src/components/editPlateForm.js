import React, {Component} from 'react';
import updatePlates from '../actions/updatePlates'
import { connect } from 'react-redux';
import deletePlates from '../actions/deletePlates'
import uploadImg  from '../actions/uploadImg'
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
    
    let plate = this.props.plates.find(plate => plate.id === this.props.plateId)

    this.setState({ 
      show: true,
      name: (!!plate.name ? plate.name : ''),
      description: (!!plate.description ? plate.description : ''),
      in: (!!plate.in ? plate.in : ''),
      out: (!!plate.out ? plate.out : ''),
      price: (!!plate.price ? plate.price : '')
    });
  }

  findCategoryId = () => {
    return this.props.plates.find(plate => plate.id === this.props.plateId).category_id;
  }

  handlePlateDelete = () => {
    const categoryId = this.findCategoryId()
    this.props.deletePlates(this.handleClose, this.props.plateId, categoryId)
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
    fd.append('plate[id]', this.props.plateId);
    fd.append('plate[name]', name);
    fd.append('plate[price]', price);
    fd.append('plate[in]', inside);
    fd.append('plate[out]', outside);
    fd.append('plate[category_id]', category_id);
    fd.append('plate[description]', description);
    this.props.updatePlates(fd, this.handleClose, category_id);
  }

  render() {
    let editIcon = '';
    if (this.props.auth) {
      editIcon = <a href='/' onClick={this.handleShow}><h6><span className='edit-plates'><FontAwesomeIcon icon="pencil-alt"/></span><span className='sm-sc-edit-plates'>Edit</span></h6></a>
    }

    return (
      <React.Fragment>
        {editIcon}
        <Modal show={this.state.show} onHide={this.handleClose} className='edit-plate-modal' centered>
        <Form onSubmit={this.handleSubmit} className='container'>
            <h1>Edit Dish</h1>
            <Form.Group controlId="plate-name">
              <Form.Control type="text" value={this.state.name} name='name' placeholder="name" ref='name' onChange={this.handleInputChange} required/>
            </Form.Group>
            <Form.Group controlId="plate-description">
              <Form.Control as="textarea" rows="4" value={this.state.description} name='description' placeholder="description" ref='description' onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="plate-price">
              <Form.Control type="number" value={this.state.price} step='0.01' name='price' placeholder="price" ref='price' onChange={this.handleInputChange} required/>
            </Form.Group>
            <Form.Group controlId="plate-in">
              <Form.Control type="text" value={this.state.in} name='in' placeholder="in" ref='in' onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="plate-out">
              <Form.Control type="text" value={this.state.out} name='out' placeholder="out" ref='out' onChange={this.handleInputChange}/>
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
              Update
            </Button>
            <Button variant="danger" className='btn-block' onClick={this.handlePlateDelete}>
              Delete This Dish
            </Button>
        </Form>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates,
  auth: state.plates.auth,
  selectedFile: state.plates.selectedFile
})

export default connect(mapStateToProps, {uploadImg, updatePlates, deletePlates})(EditPlateForm)