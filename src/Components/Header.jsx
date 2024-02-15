import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
        
        <Navbar expand="lg" style={{backgroundColor:"#3842b8",}}>
      <Container>
        <Navbar.Brand href="#home" className='text-white'><i class="fa-solid fa-graduation-cap me-2 text-white"></i>Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className=' text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className=' text-white'>Services</Nav.Link>
            <Nav.Link href="#home" className=' text-white'>About Us</Nav.Link>
            <Nav.Link href="#link" className=' text-white'>Login</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header