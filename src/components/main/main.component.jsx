import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext,useEffect,useState } from 'react';
import React from 'react';
import { ProductsContext} from '../../contexts/oj.context';
import { addCollectionAndDocuments } from '../../firebase-utils/firebase.utils';
import OjCard from '../ojCard/ojCard.component';
import Alert from 'react-bootstrap/Alert';
import { Row,Col,Toast,ToastContainer } from 'react-bootstrap';
import './main.styles.css'


export default function Main(){
  const oj = 'oj'
  const {productsMap} = useContext(ProductsContext);
  const [products, setProducts] = useState([{ items: [] }]);
  const { items: productsToRead } = products[0];
  const [alertMessage, setAlertMessage] = useState('');
 

  const onChangeHandler = (id, quantity) => {
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
                lastUpdated: new Date().toLocaleString()
              }
            : item
        ),
      };
    }
    return product;
  });
  setProducts(updatedProducts);
  addCollectionAndDocuments("Oj", updatedProducts);
  setAlertMessage('Product updated successfully.');
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
    
};


  useEffect(() => {
    if (productsMap){
      setProducts([{  title: 'Oj',  items: productsMap?.[oj] ?? []}]);}
  }, [productsMap, oj]);


  return (
    <>
      <h1 className='ojheader'>Chambers Bay Whole Foods</h1>
    <Row xs={0} md={1} className="g-4">
   
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
        {alertMessage && (
          <ToastContainer className="p-3 position-fixed" position="top-end">
          <Toast  bg = "Success" variant="success" show={true} >
          <Toast.Header>
          <strong className="me-auto">OJ Update</strong>
          
          </Toast.Header>
          <Toast.Body>{alertMessage}</Toast.Body>
          </Toast>
          </ToastContainer>
        )}
    {productsToRead&&
      productsToRead.map((product) => {
       
      return <OjCard 
        key={product.id} 
        id={product.id}
        isInStock = {product.isInStock}
        name = {product.name}
        price ={product.price}
        quantity = {product.quantity} 
        updateQuantity = {onChangeHandler}
        lastUpdated = {product.lastUpdated}
        />
    })}
    </Col>
    ))}
    </Row>
    </>
  )
  
};



