import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="/">Ichiban-Fresno</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#menu">Menu</Nav.Link>
            <Nav.Link href="/#about-us">About Us</Nav.Link>
            <Nav.Link href="/#opening-hours">Opening Hours</Nav.Link>
            <Nav.Link href="/#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar