import SignUpForm from '../sign-up-form/sign-up-form.component.jsx'
import SignInForm from '../sign-in-form/sign-in-form.component.jsx';
import { useState } from 'react';
import { Row, Col, Toast, ToastContainer, Button, ModalFooter,Modal } from 'react-bootstrap';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
  }
  from 'mdb-react-ui-kit';
  
import './authentication.styles.scss'

export default function Authentication(){
    const [show, setShow] = useState(false);

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


    return(
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

        <SignInForm/>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <SignUpForm/>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}