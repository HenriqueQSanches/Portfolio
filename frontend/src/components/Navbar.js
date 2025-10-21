import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false); 
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={navbarRef}>
      <div className="navbar-title">
        <div className="logo-wrapper">
          <FaCode className="navbar-icon-left" />
        </div>
        <span className="logo-text">
          <span className="logo-dev">Dev.</span> Henrique S.
        </span>
      </div>

      <div className={`navbar-icon ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
        <div className="circle"></div>
      </div>
      {isOpen && (
        <nav className="navbar">
          <ul>
            <li><Link to="/" onClick={toggleNavbar}>INICIO</Link></li>
            <li><Link to="/about" onClick={toggleNavbar}>SOBRE</Link></li>
            <li><Link to="/tech" onClick={toggleNavbar}>TECNOLOGIAS</Link></li>
            <li><Link to="/awards" onClick={toggleNavbar}>RECONHECIMENTOS</Link></li>
            <li><Link to="/projects" onClick={toggleNavbar}>PROJETOS</Link></li>
            <li><Link to="/services" onClick={toggleNavbar}>SERVIÇOS</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
