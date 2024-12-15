import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavMenu from '../components/NavMenu'; 
import Header from '../components/Header'; 
import '../styles/ShoppingCart.css'; 

function ShoppingCart({ cartItems, updateCart }) {
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Handle removing an item from the cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // prevent quantity less than 1
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <Header
        title="Shopping Cart"
        subtitle={`${cartItems.length} Items in Your Cart - Subtotal $${subtotal.toFixed(2)}`}
      />

      {/* Main */}Con
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Option: {item.option}</p>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
              </div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>
            <strong>Items:</strong> {cartItems.length}
          </p>
          <p>
            <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
          </p>
          <div className="shipping">
            <label htmlFor="shipping">Shipping:</label>
            <select id="shipping">
              <option value="free">Free Shipping</option>
            </select>
          </div>
          <div className="promo-code">
            <label htmlFor="promo">Promo Code:</label>
            <input id="promo" type="text" />
            <button>Apply</button>
          </div>
          <p className="grand-total">
            <strong>Grand Total:</strong> ${subtotal.toFixed(2)}
          </p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      <button className="back-to-shop" onClick={() => navigate('/shop')}>
        Back to Shop
      </button>
    </div>
  );
}

export default ShoppingCart;
