import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.styles.css';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar(){

    return (
        <>
          <Navbar  bg="warning" variant="dark">
            <Container className='link'> 
              <LinkContainer  to='/'><Navbar.Brand>WholeFoodsOJ.com</Navbar.Brand></LinkContainer>
                <Nav className="me-auto">
                  <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/info'>
                    <Nav.Link to='/info'>Info</Nav.Link>
                  </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
          <Outlet/>
          </>
          )}