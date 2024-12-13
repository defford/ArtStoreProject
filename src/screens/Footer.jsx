import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerSocials">
          <img src="src/assets/Facebook.png" alt="" />
          <img src="src/assets/Twitter.png" alt="" />
          <img src="src/assets/Instagram.png" alt="" />
          <img src="src/assets/Linkedin.png" alt="" />
          <img src="src/assets/Youtube.png" alt="" />
        </div>
        <h3>SITEMAP</h3>
        <p>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Cart</a>
          <a href="">Community</a>
          <a href="">FAQ</a>
          <a href="">Events</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </p>
        <h3>SUPPORT</h3>
        <p>
          <a href="">Terms</a>
          <a href="">Returns</a>
          <a href="">Shipping</a>
        </p>
        <p>© Copyright 2024 Newfound Art Co. Designed by Zag Creative</p>
      </div>
    </>
  )
}

export default Footer