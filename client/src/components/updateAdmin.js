import React, {Component} from 'react';
import { withRouter } from "react-router";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class UpdateAdmin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      email: '',
      password: '',
      updateSuccess: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ 
      show: true
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value; 
    const password= e.target.elements.password.value;

    const data = {admin: {email: email, password: password}}

    fetch('/api/admin/update_info', {
      method: 'POST',
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json',
        'token': sessionStorage.getItem('token'),
        'Authorization': `Token ${sessionStorage.getItem('token')}`
      },
    })
    .then(response => response.json())
    .then(response => {
      this.handleClose();
      alert('Succesfully updated your email and password');
      this.props.history.push('/');
    })
    .catch(error => console.log(error))
  }

  render() {

    return (
      <React.Fragment>
        <a href='/' onClick={this.handleShow} className='nav-link'>Update My Info</a>
        <Modal show={this.state.show} onHide={this.handleClose} className='edit-plate-modal' centered>
        <Form onSubmit={this.handleSubmit} className='container'>
            <h1>Update My Information</h1>
            <Form.Group controlId="plate-name">
              <Form.Control type="text" value={this.state.email} name='email' placeholder="email" ref='email' onChange={this.handleInputChange} required/>
            </Form.Group>
            <Form.Group controlId="plate-description">
              <Form.Control type="password" value={this.state.password} name='password' placeholder="password" ref='password' onChange={this.handleInputChange}/>
            </Form.Group>
            <Button variant="primary" className='btn-block' type="submit">
              Update
            </Button>
        </Form>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withRouter(UpdateAdmin)