import React from 'react';
import './App.css';
import Main from './components/main/main.component';
import NavBar from './components/navbar/navbar.component';
import Info from './components/info/info.components';
import AddLocation from './components/addlocation/add-location.component';

// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Routes, Route} from 'react-router-dom'
import Authentication from './components/authentication/authentication.component';


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
      <Route path='auth' element = {<Authentication />}/>
      <Route path='addlocation' element = {<AddLocation/>}/>
      </Route>
      

     

      </Routes>
      
    </>
  );
}

export default App;
