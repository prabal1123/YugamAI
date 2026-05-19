import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">YugamAi</div>

        <ul className={`nav-links ${isOpen ? "mobile-open" : ""}`}>
          {/* Section smooth anchors */}
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#process" onClick={() => setIsOpen(false)}>Process</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          {/* Page Routing links */}
          <li>
            <Link to="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
          </li>
          <li>
            <Link to="/delete-account" onClick={() => setIsOpen(false)}>Delete Account</Link>
          </li>
        </ul>

        <button className="nav-btn">Start a Project</button>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;