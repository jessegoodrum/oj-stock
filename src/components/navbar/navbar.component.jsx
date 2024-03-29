// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {React, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import './navbar.styles.css';

import WFOJ from '../../assets/WholeFoodsOjOrange.png';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../firebase-utils/firebase.utils';


export default function NavBar(){

  const {currentUser} = useContext(UserContext);

    return (
          <>
          <Navbar bg="warning" variant="dark" expand="md">
            <Container>
              
              <Navbar.Brand>
              
              <img src={WFOJ} style={{width:100, marginLeft: 20, marginRight:10}} />
              Whole Foods Oj 
            </Navbar.Brand>
              
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/info">
                    <Nav.Link>Info</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/auth">
                    {currentUser ? (
                      <Nav.Link as="span" onClick={signOutUser}>
                        Logout
                      </Nav.Link>
                    ) : (
                      <Nav.Link>Login</Nav.Link>
                    )}
                  </LinkContainer>
                  <LinkContainer to="/addlocation">
                  {currentUser ? (
                    <Nav.Link as="span">
                      Add Location
                    </Nav.Link>
                  ) : (
                    <Nav.Link></Nav.Link>
                  )}
                    
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        <Outlet />
        </>
          )}