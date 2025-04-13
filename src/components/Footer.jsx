import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from 'react-icons/fa';
import { IoRocketOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#101822" 
            fillOpacity="1" 
            d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,96C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-section office">
          <h3>Office</h3>
          <p>Germany —</p>
          <p>785 15th Street, Office 478</p>
          <p>Berlin, De 81566</p>
          <a href="mailto:info@email.com">info@email.com</a>
          <p className="phone">+1 840 841 25 69</p>
        </div>

        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>

        <div className="footer-section socials">
          <h3>Socials</h3>
          <ul>
            <li><a href="#"><FaFacebookF /> Facebook</a></li>
            <li><a href="#"><FaTwitter /> Twitter</a></li>
            <li><a href="#"><FaDribbble /> Dribbble</a></li>
            <li><a href="#"><FaInstagram /> Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">
              <IoRocketOutline />
            </button>
          </div>
          <div className="privacy-check">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">I agree to the <a href="/privacy">Privacy Policy</a></label>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>AxiomThemes © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;