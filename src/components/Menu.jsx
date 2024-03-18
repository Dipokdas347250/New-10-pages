import React from 'react'
import { Navbar, Container ,Nav ,NavDropdown } from 'react-bootstrap'
import logo from "../assets/BWFC.png"
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./menu.css"


const Menu = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        
        <NavDropdown title="Product" className='one'>
          </NavDropdown>
        <NavDropdown title="Template" className='two'>
          </NavDropdown>
          
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#home">Pricing</Nav.Link>
        
          
        </Nav>
        <div className="login">
            <a href="#"> <FaArrowAltCircleRight className='icon' />Sign In</a>
            <a href="#">Start Free</a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu
