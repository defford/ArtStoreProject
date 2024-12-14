import React from 'react'
import { Link } from 'react-router'

const Header = () => {
return (
    <>
        <div className='navBar'>
            <Link to="/">
            <img id="headerLogo" src="src/assets/smallFLofo.png" alt="Small Logo of an F"/>
            </Link>
            <div className='navLinks'>
                <Link to="/shop">SHOP</Link>
                <Link to="/community">COMMUNITY</Link>
                <Link to="/events">EVENTS</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <Link to="/shopping-cart">
                <img id="cart" src="src/assets/cart.png" alt="" onClick={<Link to='/' />} />
            </Link>
        </div>
    </>
)
}

export default Header