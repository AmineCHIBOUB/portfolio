import React, { useState } from 'react';
import { contact, personalInfo } from '../../data/portfolioData';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    
    try {
      const response = await fetch("https://formspree.io/f/xaqdenkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          subject: '', 
          message: '' 
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setIsError(true);
      }
    } catch (error) {
      console.error("Network error:", error);
      setIsError(true);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-grid">
          
          <div className="contact-info card">
            <h3 className="contact-info-title">Restons en contact</h3>
            
            <div className="contact-details">
              
              <div className="contact-detail-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${contact.email}`} className="contact-value">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Localisation</span>
                  <span className="contact-value">{contact.location}</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-icon">📍</span>
                <div>
                  <span className="contact-label">Mobilité</span>
                  <span className="contact-value">{contact.mobility}</span>
                </div>
              </div>

            </div>

            <div className="contact-social">
              <h4>Réseaux</h4>
              <div className="social-links">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

          </div>

          <div className="contact-form-container card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Envoyez-moi un message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Optionnel"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Objet de votre message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Envoyer le message
              </button>

              {isSubmitted && (
                <div className="form-success">
                  ✅ Message envoyé ! Je vous répondrai dans les plus brefs délais.
                </div>
              )}

              {isError && (
                <div className="form-error">
                  ❌ Une erreur est survenue. Veuillez réessayer ou m'envoyer un email directement.
                </div>
              )}
            </form>
          </div>
          
        </div> 
      </div> 
    </section>
  );
};

export default Contact;