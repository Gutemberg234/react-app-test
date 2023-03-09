import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { StylesGlobal } from './global';
import { Cart } from './Pages/Cart';
import { Home } from './Pages/Home';

function App() {
  return (
   <BrowserRouter>
   <StylesGlobal />
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/carrinho' element={<Cart />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
