import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/navBar.css';

const NavBar = () => {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg" className='navbar'>
        <div className="container">
        <Navbar.Brand className='nav-brand' href="/"><h2>ICHIBAN</h2></Navbar.Brand>
        <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
            <Nav.Link className='nav-link' href="/#menu">Menu</Nav.Link>
            <Nav.Link className='nav-link' href="/#about-us">About Us</Nav.Link>
            <Nav.Link className='nav-link' href="/#opening-hours">Opening Hours</Nav.Link>
            <Nav.Link className='nav-link' href="/#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default NavBar