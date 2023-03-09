// import React, { useState, useEffect } from 'react';
// import './paypal.styles.css'
// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
// import { Button } from 'react-bootstrap';

// const PayPal = ({currency}) => {const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

// const [tip, setTip] = useState("1.00")

// useEffect(() => {
//     dispatch({
//         type: "resetOptions",
//         value: {
//             ...options,
//             currency: currency,
//         },
//     });
// }, [currency]);

// const onChangeHandler = (event) =>{
//    const tip = event.target.value;
//     setTip(tip);
// }


//  return (

//     <>
//     <input type="string" onChange={onChangeHandler} /> 
//     <PayPalButtons
//     fundingSource="paypal"
//     style={{"layout":"vertical","label":"donate"}}
//     disabled={false}
//     createOrder={(data, actions) => {
//         return actions.order
//             .create({
//                 purchase_units: [
//                     {
//                         amount: {
//                             value: "2",
//                             breakdown: {
//                                 item_total: {
//                                     currency_code: "USD",
//                                     value: tip,
//                                 },
//                             },
//                         },
//                         items: [
//                             {
//                                 name: "donation",
//                                 quantity: "1",
//                                 unit_amount: {
//                                     currency_code: "USD",
//                                     value: tip,
//                                 },
//                                 category: "DONATION",
//                             },
//                         ],
//                     },
//                 ],
//             })
//             .then((orderId) => {
//                 // Your code here after create the donation
//                 return orderId;
//             });
//     }}
// />
// </>
//  );

// } 

// export default PayPal;
