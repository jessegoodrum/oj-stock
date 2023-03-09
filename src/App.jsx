import React from 'react';
import './App.css';
import Main from './components/main/main.component';
import NavBar from './components/navbar/navbar.component';
import Info from './components/info/info.components';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Routes, Route} from 'react-router-dom'


// const initialOptions = {
//   "client-id": "AW9ej6pVlO4AuO50UKKo0ISOYV0CUAomszpi4Prn_k_BO0f8O6rHo0MG3_f7Y8sIi_yCQAynMcgt-Gs5",
//   currency: "USD",
//   intent: "capture",
// };


function App() {


  return (
    <>
      <Routes>
      <Route path='/' element ={<NavBar/>} >
      <Route path='/' index element= { <Main />} />
      <Route path='info'  element= { <Info />} />
      </Route>
      

     

      </Routes>
      
    </>
  );
}

export default App;
