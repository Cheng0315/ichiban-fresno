import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/signIn.css';

class SignIn extends Component {

  render(){
    return ( 
      <div className='container sign-in'>
        <div className='sign-in-form'>
          <h1>ICHIBAN</h1>
          <h4>Sign in to Ichiban</h4>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
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