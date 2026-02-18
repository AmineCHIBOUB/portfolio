import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-status">{personalInfo.status}</p>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <FaEnvelope />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="footer-contact-item">
              <FaPhone />
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="footer-social">
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
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}.</p>
          <p className="footer-availability">{personalInfo.availability}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;