// IGNORE FILE THIS IS A BACKUP FROM BEFORE WE PUT OUR CODE TOGETHER

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Update cart state
  const updateCart = (newCartItems) => setCartItems(newCartItems);

  return (
    <Routes>
      <Route
        path="/"
        element={<Shop cartItems={cartItems} updateCart={updateCart} />}
      />
      <Route
        path="/product/:productId"
        element={<ProductPage cartItems={cartItems} updateCart={updateCart} />}
      />
      <Route
        path="/cart"
        element={<ShoppingCart cartItems={cartItems} updateCart={updateCart} />}
      />
    </Routes>
  );
}

export default App;










