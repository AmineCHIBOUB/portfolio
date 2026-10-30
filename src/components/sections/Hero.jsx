import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="availability-pulse"></span>
            Consultant ERP chez AeroDIODE · Master 2 MIAGE
          </div>
          
          <h1 className="hero-name">
            <span className="hero-firstname">CHIBOUB</span>
            <span className="hero-lastname">Amine</span>
          </h1>
          
          <h2 className="hero-status">{personalInfo.status}</h2>
          
          <div className="hero-titles">
            {personalInfo.titles.map((title, index) => (
              <span key={index} className="hero-title">
                {title}
                {index < personalInfo.titles.length - 1 && ' • '}
              </span>
            ))}
          </div>

          <div className="hero-location">
            <FaMapMarkerAlt /> {personalInfo.location} • {personalInfo.mobility}
          </div>

          <div className="hero-contact-info">
            <a href={`mailto:${personalInfo.email}`} className="hero-contact-item">
              <FaEnvelope /> {personalInfo.email}
            </a>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Me contacter</a>
            {personalInfo.cv && (
              <a href={personalInfo.cv} download className="btn btn-outline">
                <FaFileDownload /> Mon CV
              </a>
            )}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-photo-container">
            <img src="/images/profile.jpg" alt="CHIBOUB Amine" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;