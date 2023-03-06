import React from 'react';
import './App.css';
import Main from './components/main/main.component';
import NavBar from './components/navbar/navbar.component';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const initialOptions = {
  "client-id": "AW9ej6pVlO4AuO50UKKo0ISOYV0CUAomszpi4Prn_k_BO0f8O6rHo0MG3_f7Y8sIi_yCQAynMcgt-Gs5",
  currency: "USD",
  intent: "capture",
};


function App() {


  return (
    <>
      <div>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
      <NavBar/>
      <PayPalScriptProvider options={initialOptions}>
      <Main />
      </PayPalScriptProvider>
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
