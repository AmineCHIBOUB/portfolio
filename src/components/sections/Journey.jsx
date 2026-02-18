import React from 'react';
import { 
  education, 
  certifications, 
  languages, 
  certificationLinks 
} from '../../data/portfolioData';
import './Journey.css';

const Journey = () => {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2 className="section-title">Parcours</h2>
        
        <div className="journey-grid">
          
          <div className="journey-education">
            <h3 className="journey-subtitle">🎓 Formation</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <div className="timeline-institution">
                      <span className="institution-name">{edu.institution}</span>
                      <span className="timeline-period">{edu.period}</span>
                      <span className="timeline-location">{edu.location}</span>
                    </div>
                    {edu.description && (
                      <p className="timeline-description">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="journey-side">
            
            <div className="certifications card">
              <h3 className="journey-subtitle">📜 Certifications</h3>
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <li key={index}>
                    <a 
                      href={certificationLinks[index]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      <span className="badge cert-badge">{cert}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="languages card">
              <h3 className="journey-subtitle">🌍 Langues</h3>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;