import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div><Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contacts</Nav.Link>
        <Nav.Link href="/add">Add</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar></div>
    
  )
}

export default NavBar;