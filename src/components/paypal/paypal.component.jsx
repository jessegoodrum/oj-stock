// import React, { useState } from 'react';
import './paypal.styles.css'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PayPal = () => {
    const [{  isPending }] = usePayPalScriptReducer();
    // const [currency, setCurrency] = useState(options.currency);

    // const onCurrencyChange = ({ target: { value } }) => {
    //     setCurrency(value);
    //     dispatch({
    //         type: "resetOptions",
    //         value: {
    //             ...options,
    //             currency: value,
    //         },
    //     });
    // }

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "5.00",
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    return (
        <div className="checkout">
        
        
        
            {isPending ? <p>LOADING...</p> : (
                <div>
                    
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </div>
            )}
        </div>
    );
}

export default PayPal;