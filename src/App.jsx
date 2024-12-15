import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './pages/Shop'; // Use your existing Shop component
import ProductPage from './pages/ProductPage'; // Your product page
import ShoppingCart from './pages/ShoppingCart'; // Your shopping cart page
import Community from './screens/Community';
import About from './screens/About';
import Events from './screens/Events';
import Checkout from './screens/Checkout';
import Header from './screens/Header';
import Footer from './screens/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Update cart state
  const updateCart = (newCartItems) => setCartItems(newCartItems);

  return (
    <>
      <Header cartItems={cartItems} /> {/* Pass cart state to Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/product/:productId" element={<ProductPage cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
