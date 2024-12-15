import React from 'react';
import FacebookIcon from '../assets/Facebook.png';
import TwitterIcon from '../assets/Twitter.png';
import InstagramIcon from '../assets/Instagram.png';
import LinkedInIcon from '../assets/Linkedin.png';
import YouTubeIcon from '../assets/Youtube.png';

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerSocials">
          <img src={FacebookIcon} alt="Facebook Icon" />
          <img src={TwitterIcon} alt="Twitter Icon" />
          <img src={InstagramIcon} alt="Instagram Icon" />
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
          <img src={YouTubeIcon} alt="YouTube Icon" />
        </div>
        <h3>SITEMAP</h3>
        <p>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
          <a href="/community">Community</a>
          <a href="/faq">FAQ</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </p>
        <h3>SUPPORT</h3>
        <p>
          <a href="/terms">Terms</a>
          <a href="/returns">Returns</a>
          <a href="/shipping">Shipping</a>
        </p>
        <p>© Copyright 2024 Newfound Art Co. Designed by Zag Creative</p>
      </div>
    </>
  );
};

export default Footer;

