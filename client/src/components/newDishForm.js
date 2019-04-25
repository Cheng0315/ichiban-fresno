import React, {Component} from 'react';
import { withRouter } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class NewDishForm extends Component {
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
    let fd = new FormData();
    
    const name = e.target.elements.name.value; 
    const price= e.target.elements.price.value;
    const description= e.target.description.value;
    const inside = e.target.elements.in.value;
    const outside = e.target.elements.out.value;
    const category_id = e.target.elements.category_id.value;

    fd.append('image', this.props.selectedFile, this.props.selectedFile.name)
    fd.append('plate[name]', name)
    fd.append('plate[price]', price)
    fd.append('plate[in]', inside)
    fd.append('plate[out]', outside)
    fd.append('plate[category_id]', category_id)
    fd.append('plate[description]', description)

    fetch('/api/create_plate', {
      method: 'post',
      body: fd,
      headers: {
        'token': sessionStorage.getItem('token'),
        'Authorization': `Token ${sessionStorage.getItem('token')}`
      },
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add A New Dish
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form onSubmit={this.handleSubmit}>
            <h1>Add A New Dish</h1>
            <Form.Group controlId="plate-name">
              <Form.Control type="text" placeholder="Plate's name" name='name' ref='name'/>
            </Form.Group>
            <Form.Group controlId="plate-description">
              <Form.Control type="text" placeholder="Description" name='description' ref='description'/>
            </Form.Group>
            <Form.Group controlId="plate-in">
              <Form.Control type="text" placeholder="In" name='in' ref='in'/>
            </Form.Group>
            <Form.Group controlId="plate-out">
              <Form.Control type="text" placeholder="Out" name='out' ref='out'/>
            </Form.Group>
            <Form.Group controlId="plate-price">
              <Form.Control type="number" step='0.01' placeholder="Price" name='price' ref='price'/>
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
            <input type="file" onChange={this.props.fileSelectedHandler} required/>
            <Button variant="primary" className='btn-block' type="submit">
              Create Dish
            </Button>
        </Form>
        </Modal>
      </div>
    )
  }
}

export default NewDishForm 