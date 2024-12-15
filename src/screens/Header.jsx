import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/NavMenu.css';
import cartIcon from '../assets/cart.svg';

function NavMenu({ cartItems = [] }) { // Default cartItems to an empty array
  const navigate = useNavigate();

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="nav-menu">
      <div className="nav-left">
        <img src="/favicon.ico" alt="Newfound Art Co Favicon" className="favicon" />
      </div>
      <div className="nav-middle">
            <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink></li>
        <li><NavLink to="/community" className={({ isActive }) => (isActive ? 'active' : '')}>Community</NavLink></li>
        <li><NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : '')}>Events</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          Cart {cartItems.length > 0 && `(${cartItems.length})`}
        </NavLink></li>
      </ul>
      </div>
      <div className="nav-right">
        <div className="cart-icon-container" onClick={() => navigate('/cart')}>
        <img src={cartIcon} alt="Shopping Cart" className="cart-icon" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;