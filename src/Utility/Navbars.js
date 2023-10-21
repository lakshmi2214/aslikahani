import React, { useState } from 'react';
import './nav.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked"); // Add this for debugging
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`asli-navbar ${isOpen ? 'active' : ''}`}>
      <div className="logo">Your Logo</div>
      <ul className={`nav-linking ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="toggle-buttons" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </nav>
  );
}

export default Navbar;
