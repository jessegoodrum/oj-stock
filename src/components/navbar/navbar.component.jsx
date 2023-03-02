import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
export default function NavBar(){

    return (
        <>
          <Navbar bg="warning" variant="dark">
            <Container>
              <Navbar.Brand href="#home">DoesWholeFoodsHaveOj.com</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Info</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>)
}