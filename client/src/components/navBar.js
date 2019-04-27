import React, {Component} from 'react';
import updateAuth from '../actions/updateAuth'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import UpdateAdmin from './updateAdmin'
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
      this.props.history.push('/');
    })
    .catch(error => console.log(error))
  }

  render() {
    let logOut = '';
    let navBar = '';

    if (this.props.auth) {
      logOut =  <React.Fragment>
                  <UpdateAdmin/>
                  <Nav.Link className='nav-link' href="/" onClick={this.handleClick}>Log Out</Nav.Link>
                </React.Fragment>
    } 

    if (window.location.pathname === '/') {
      navBar = <React.Fragment>
                 <AnchorLink className='nav-link' href='#menu'>Menu</AnchorLink>
                 <AnchorLink className='nav-link' href='#opening-hours'>Opening Hours</AnchorLink>
                 <AnchorLink className='nav-link' href='#about-us'>About Us</AnchorLink>
                 <AnchorLink className='nav-link' href='#contact-us'>Contact Us</AnchorLink>
               </React.Fragment>
    } else {
      navBar = <React.Fragment>
                 <Nav.Link className='nav-link' href="/#menu">Menu</Nav.Link>
                 <Nav.Link className='nav-link' href="/#opening-hours">Opening Hours</Nav.Link>
                 <Nav.Link className='nav-link' href="/#about-us">About Us</Nav.Link>
                 <Nav.Link className='nav-link' href="/#contact-us">Contact Us</Nav.Link>
               </React.Fragment>
    }

    return (
      <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand className='nav-brand' href="/"><h2>ICHIBAN</h2></Navbar.Brand>
        <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
            {navBar}
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

export default withRouter(connect(mapStateToProps, {updateAuth})(NavBar))