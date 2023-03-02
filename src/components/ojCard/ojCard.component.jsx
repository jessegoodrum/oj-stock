
import { Row, Col, Container, Card} from 'react-bootstrap';
import "./ojCard.styles.css";
import Oj0 from '../../assets/Oj-1.jpg';
import Oj1 from '../../assets/Oj-2.jpg';
import Oj2 from '../../assets/Oj-3.jpg';
import React from 'react';


import { useState} from "react"


export default function OjCard({id,isInStock,name,price,quantity, updateQuantity}){
    
    const [amount, setAmount] = useState(quantity);
    const images = ["placeholder",Oj0, Oj1, Oj2];

    const changeQuantity = (event) =>{
        setAmount(event.target.value);
    }
    return(
        
            <Card key={id} className="oj-card-container">

                
                    <Card.Img variant="top" src={images[id]} className ="oj-img"/>
                    
                    <Card.Body>
                    <Card.Title className="oj-title">{name}</Card.Title>
                    
                    <div className="oj-info">
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{isInStock ? 'In Stock' : "Not In Stock"}</Card.Text>
                        <Card.Text>{quantity}</Card.Text>  
                    </div>

                    <Col className="oj-update">
                        <input type="number" onChange={changeQuantity}/>
                        <button onClick={() =>{updateQuantity(id, amount)}}>Change</button>
                    </Col>
                    </Card.Body>
               

            </Card>

    )
};