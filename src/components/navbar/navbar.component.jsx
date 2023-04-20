import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import {React, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import './navbar.styles.css';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../firebase-utils/firebase.utils';


export default function NavBar(){

  const {currentUser} = useContext(UserContext);

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
                  <LinkContainer to='/auth'>
                  {currentUser ? (<Nav.Link as='span' onClick={signOutUser}>Logout</Nav.Link>) : (<Nav.Link to='/auth' >Login</Nav.Link>)}
                  </LinkContainer>
                  <LinkContainer to='/addlocation'>
                    <Nav.Link to='/addlocation'>Add Location</Nav.Link>
                  </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
          <Outlet/>
          </>
          )}