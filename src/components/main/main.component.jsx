import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { ProductsContext } from '../../contexts/oj.context';
import { UserContext } from '../../contexts/user.context';
import { addCollectionAndDocuments, db, getCategoriesAndDocuments } from '../../firebase-utils/firebase.utils';
import { auth, firestore } from '../../firebase-utils/firebase.utils';
import { updateDoc, doc } from 'firebase/firestore';

import OjCard from '../ojCard/ojCard.component';
import { Row, Col, Toast, ToastContainer, Button, ModalFooter,Modal } from 'react-bootstrap';
import './main.styles.css'

export default function Main() {
  const { currentUser } = useContext(UserContext);
  const oj = 'oj'
  const [productsMap, setProductsMap] = useState(null);
  const [products, setProducts] = useState([{ items: [] }]);
  const { items: productsToRead } = products[0];
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLoading = (status) => setLoading(status);
  

  const onChangeHandler = async (id, quantity) => {
    const updatedProducts = products.map((product) => {
      if (product.items && id && product.items.some((item) => item.id === id)) {
        return {
          ...product,
          items: product.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: quantity,
                  isInStock: quantity > 0,
                  lastUpdated: new Date().toLocaleString(),
                }
              : item,
          ),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  
    // Update the document in Firestore
    const locationRef = doc(db, 'Oj', selectedLocation);
    await updateDoc(locationRef, { oj: { items: updatedProducts[0].items } });
  
    setAlertMessage('Product updated successfully.');
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };
  

  const fetchProducts = async () => {
    handleLoading(true);
    const categoriesAndDocuments = await getCategoriesAndDocuments();
    setProductsMap(categoriesAndDocuments);
    setLocations(Object.keys(categoriesAndDocuments));
    handleLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (productsMap && selectedLocation) {
      const selectedLocationProducts = productsMap[selectedLocation];
      if (selectedLocationProducts) {
        setProducts([{ title: 'Oj', items: selectedLocationProducts }]);
      }
    }
  }, [productsMap, selectedLocation]);


  return (
    <>
    {loading ? (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="loader"></div>
      </div>
    ) : (
    <>
      <h1 className="ojheader">{selectedLocation}</h1>
      <div  className='location-modal d-flex flex-column align-items-center link'>

      <Button variant="success"  onClick={handleShow} className='select-location'>
        Select Location
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}>
        <option 
        value="">Select a location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> 
      
      </div>
      <Row xs={0} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            {alertMessage && (
              <ToastContainer className="p-3 position-fixed" position="top-end">
                <Toast bg="Success" variant="success" show={true}>
                  <Toast.Header>
                    <strong className="me-auto">OJ Update</strong>
                  </Toast.Header>
                  <Toast.Body>{alertMessage}</Toast.Body>
                </Toast>
              </ToastContainer>
            )}
            {productsToRead &&
              productsToRead.map((product) => {
                return (
                  <OjCard
                    key={product.id}
                    id={product.id}
                    isInStock={product.isInStock}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    updateQuantity={onChangeHandler}
                    lastUpdated={product.lastUpdated}
                    selectedLocation={selectedLocation}
                    fetchProducts={fetchProducts}
                  />
                );
              })}
          </Col>
        ))}
      </Row>
    <ModalFooter className="donate">
      <h1 className="donate-heading">Enjoy the app? Buy me a coffee!</h1>
      <Button
        className="donate-button"
        size="lg"
        onClick={() =>
          window.open(
            "https://www.paypal.com/donate/?hosted_button_id=KH8CWFCSQTLPL",
            "_blank"
          )
        }
      >
        Donate Here!
      </Button>
    </ModalFooter>
  </>
  )}
  </>
);
  
};



