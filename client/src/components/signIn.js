import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/signIn.css';

class SignIn extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      const inputs = {...{}, email: e.target.elements.email.value, password: e.target.elements.password.value}
      fetch('/api/sign_in', {
        method: 'post',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(response => console.log(response))
    } else {
      console.log('oh no')
    }
  }

  render(){
    return ( 
      <div className='container sign-in'>
        <div className='sign-in-form'>
          <h1>ICHIBAN</h1>
          <h4>Sign in to Ichiban</h4>
          <Form onSubmit={event => this.handleSubmit(event)} noValidate>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" name='email' ref='email' required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" name='password' ref='password' required/>
            </Form.Group>
            <Button variant="primary" className='btn-block' type="submit">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default SignIn