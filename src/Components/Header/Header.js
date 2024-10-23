import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">My Logo</div>
        <nav className="nav-menu" data-navbar>
          <ul className={`${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href='/events'>Events</a></li>
          </ul>
        </nav>

        <div className="hamburger" data-nav-toggler onClick={toggleNavbar}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
