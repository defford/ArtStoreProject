import React from 'react';
import '../styles/CartIcon.css'; 

export default function CartIcon() {
  const cartItemCount = 3;
  return (
    <div className="cart-icon">
      <span className="cart-icon__icon">🛒</span>
      {cartItemCount > 0 && <span className="cart-icon__count">{cartItemCount}</span>}
    </div>
  );
}
