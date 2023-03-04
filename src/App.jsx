import React from 'react';
import './App.css';
import Main from './components/main/main.component';
import NavBar from './components/navbar/navbar.component';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  return (
    <>
      <div>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
      <NavBar/>
      <Main />
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
