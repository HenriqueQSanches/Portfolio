import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { to: '/', label: 'Início' },
    { to: '/about', label: 'Sobre' },
    { to: '/experiences', label: 'Experiências' },
    { to: '/tech', label: 'Tecnologias' },
    { to: '/awards', label: 'Reconhecimentos' },
    { to: '/projects', label: 'Projetos' },
    { to: '/services', label: 'Serviços' }
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="navbar-shell">
      <div className="navbar-wrapper">
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-icon">
            <FaCode />
          </span>
          <span className="brand-text">
            <span className="brand-dev">Dev.</span> Henrique S.
          </span>
        </NavLink>

        <nav className="navbar-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      <div className={`mobile-panel ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
