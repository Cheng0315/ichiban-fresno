import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import updateAuth from '../actions/updateAuth'
import '../css/signIn.css';

class SignIn extends Component {
  
  state = {
    invalidLoginMsg: ''
  }

  validateToken = (token) => {
    if (token){
      sessionStorage.setItem('token', token);
      this.props.updateAuth(!!sessionStorage.getItem('token'));
      this.props.history.push('/');
    }else {
      this.setState({
        invalidLoginMsg: 'Invalid email or password'
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const inputs = {...{}, email: e.target.elements.email.value, password: e.target.elements.password.value}
    fetch('/api/sign_in', {
      method: 'post',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      this.validateToken(response.token)
    })
    .catch(error => console.log(error))
  }

  render(){
    const year = new Date().getFullYear()

    return ( 
      <React.Fragment>
        <div className='sign-in container'>
          <div className='sign-in-content'>
            <div className='sign-in-form'>
              <a href='/'><h1>ICHIBAN</h1></a>
              <h4>Sign in to Ichiban</h4>
              <Form onSubmit={this.handleSubmit}>
                <div className='invalid-login'>{this.state.invalidLoginMsg}</div>
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
        </div>
        <div className="text-center">Copyright &copy; {year} Ichiban, Inc. All Rights Reserved </div>
      </React.Fragment>
    )
  }
}

export default connect(null, {updateAuth})(SignIn)