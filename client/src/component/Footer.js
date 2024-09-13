// Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookSquare , FaTwitterSquare , FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
            <div className='author'>
                <div className='author-main'>
                    <h3>Muskan </h3>
                    <p>Makeup Remedies expert</p>
                </div>
                <div className='statement'>
                   <h3>I'm a makeup remedies expert who shares natural beauty tips and DIY makeup solutions.</h3>
                </div>
            </div>
        </div>
        <div className='resources-menu '>
            <div className="footer-section resources">
            <h3> Resources</h3>
            <p>Blog Post</p>
            <p>Beauty Tips</p>
            <p>FAQs</p>
            <p>E-Books & Guide</p>
            <p>NewsLetter Signup</p>
            </div>
            <div className="footer-section menu">
            <h3>Menu</h3>
            <p>
                <a href="/">Home</a> 
                <a href="/about">About</a>  
                <a href="/contact">Contact</a>
            </p>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>&copy; 2024 EcoBeauty Bliss. All rights reserved.</h4>
        <ul>
            <li><a href="https://www.facebook.com"><FaFacebookSquare /></a></li>
            <li> <a href="https://www.twitter.com"><FaTwitterSquare /></a></li>
            <li><a href="https://www.instagram.com"><FaInstagramSquare /></a></li>
       </ul>
      </div>
    </footer>
  );
};

export default Footer;
