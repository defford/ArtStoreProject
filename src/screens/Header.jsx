import React from 'react'
import { Link } from 'react-router'

const Header = () => {
return (
    <>
        <div className='navBar'>
            <img src="src/assets/smallFLofo.png" alt="Small Logo of an F"/>
            <div className='navLinks'>
                <Link to="/">HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/community">COMMUNITY</Link>
                <Link to="/events">EVENTS</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <img id="cart" src="src/assets/cart.png" alt="" onClick={<Link to='/' />} />
        </div>
    </>
)
}

export default Header