import React, {Component} from 'react';
import updateAuth from '../actions/updateAuth'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/navBar.css';

class NavBar extends Component {

  handleClick = (e) => {
    e.preventDefault()
    fetch('/api/sign_out', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'token': sessionStorage.getItem('token'),
        'Authorization': `Token ${sessionStorage.getItem('token')}`
      },
    })
    .then(response => response.json())
    .then(response => {
      sessionStorage.removeItem('token');
      this.props.updateAuth(!!sessionStorage.getItem('token'));
    })
    .catch(error => console.log(error))
  }

  render() {
    let logOut = '';

    if (this.props.auth) {
      logOut = <Nav.Link className='nav-link' href="/" onClick={this.handleClick}>Log Out</Nav.Link>;
    } 

    return (
      <Navbar bg="light" expand="lg" className='navbar'>
        <div className="container">
        <Navbar.Brand className='nav-brand' href="/"><h2>ICHIBAN</h2></Navbar.Brand>
        <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
            <AnchorLink className='nav-link' href='#menu'>Menu</AnchorLink>
            <AnchorLink className='nav-link' href='#opening-hours'>Opening Hours</AnchorLink>
            <AnchorLink className='nav-link' href='#about-us'>About Us</AnchorLink>
            <AnchorLink className='nav-link' href='#contact-us'>Contact Us</AnchorLink>
            {logOut}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.plates.auth
})

export default connect(mapStateToProps, {updateAuth})(NavBar)