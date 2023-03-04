import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext,useEffect,useState } from 'react';
import React from 'react';
import { ProductsContext} from '../../contexts/oj.context';
import { addCollectionAndDocuments } from '../../firebase-utils/firebase.utils';
import OjCard from '../ojCard/ojCard.component';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';
import { Row,Col } from 'react-bootstrap';


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
    
    <Row xs={0} md={1} className="g-4">
   
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
        {alertMessage && (
          <Alert variant="success" show={true}>
            {alertMessage}
          </Alert>
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
        />
    })}
    </Col>
    ))}
    </Row>
    
  )
};



