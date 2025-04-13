import React, { useState, useEffect } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import SearchModal from './SearchModal';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="//seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse1-nocopyright.png" alt="SmartSEO" />
        </div>

        <div className={`links-container ${isMenuOpen ? 'mobile-menu' : ''}`}>
          <div className="mobile-header">
            <img src="//seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse1-nocopyright.png" alt="SmartSEO" />
            <div className="close-menu" onClick={() => setIsMenuOpen(false)}>
              <RiCloseLine />
            </div>
          </div>
          <a href="" className='home-link'>
            Home
            <div className='home-div'>
              <a href="">SEO Company</a>
              <a href="">Marketing Agency</a>
              <a href="">Creative Agency</a>
              <a href="">Advertising Agency</a>
            </div>
          </a>
          <a href="" className='pages-link'>
            Pages
            <div className='pages-div'>
              <a href="">About Us</a>
              <a href="">Our Team</a>
              <a href="">Pricing Plans</a>
              <a href="">Typography</a>
              <a href="">404 Page</a>
            </div>
          </a>
          <a href="">Portfolio</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <span className='search' onClick={() => setIsSearchOpen(true)}><IoSearch /></span>
        </div>

        <div className='detail-container'>
          <span><FaPhoneVolume className='phone'/> (123) 456 7890</span>
          <button>Let's talk</button>
        </div>

        <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <RiMenu3Line />
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default NavBar;
