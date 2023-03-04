
import {Col, Card, Button,Form, InputGroup} from 'react-bootstrap';
import "./ojCard.styles.css";
import Oj0 from '../../assets/Oj-1.jpg';
import Oj1 from '../../assets/Oj-2.jpg';
import Oj2 from '../../assets/Oj-3.jpg';
import React from 'react';


import { useState} from "react"


export default function OjCard({id,isInStock,name,price,quantity, updateQuantity}){
    
    const [amount, setAmount] = useState(quantity);
    const images = ["placeholder",Oj0, Oj1, Oj2];
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

    const changeQuantity = (event) =>{
        setAmount(event.target.value);
    }

    const handleClick = () => {
        updateQuantity(id, amount);
        setLastUpdated(new Date().toLocaleString()); 
      };

    
    return(
        
        <Card key={id} className="oj-card-container">
        <Card.Body>
          <div className="row">
            <div className="col-sm-4">
              <Card.Img  variant="top" src={images[id]} className ="oj-img"/>
            </div>
            <div className="col-sm-7">
              <Card.Title className="oj-title">{name}</Card.Title>
              
              <div className="oj-info">
                <Card.Text>Price: {price}</Card.Text>
                <Card.Text>Availability: {isInStock ? 'In Stock' : "Not In Stock"}</Card.Text>
                <Card.Text>Stock Amount: {quantity}</Card.Text>  
              </div>
                <br/>
              <Col className="oj-update">
                <InputGroup className="mb-3">
                  <Form.Select
                    placeholder="Enter Oj Quantity"
                    aria-label="Enter Oj Quantity"
                    aria-describedby="basic-addon2"
                    type="number" 
                    min="0" max="50"
                    onChange={changeQuantity}
                    list="defaultNumbers"
                    required
                  >
                  <option value = '0'>Update OJ Stock</option>
                    {Array.from({ length: 51 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </Form.Select>
                  <Button variant="outline-secondary" id="button-addon2" onClick={() =>{handleClick(id, amount)}}>
                    Update
                  </Button>
                </InputGroup>
              </Col>
              <Card.Text>Last Updated: {lastUpdated}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
      

    )
};