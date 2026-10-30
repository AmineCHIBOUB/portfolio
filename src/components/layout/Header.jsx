import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'À propos', href: '#about' },
    { name: 'Expériences', href: '#projects' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Parcours', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#hero" className="logo">
          <img 
            src="/images/logo_AC.png" 
            alt="CHIBOUB Amine" 
            className="logo-image"
          />
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-social">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <FaEnvelope />
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;