import React from 'react';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        
        <div className="skills-grid">
          
          <div className="skill-category">
            <h3 className="skill-category-title">
              <span>💻</span> Développement
            </h3>
            <div className="skill-items">
              {skills.development.items.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">
              <span>📊</span> Data & BDD
            </h3>
            <div className="skill-items">
              {skills.data.items.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">
              <span>⚙️</span> Projet & DevOps
            </h3>
            <div className="skill-items">
              {skills.project.items.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">
              <span>🧠</span> Métier & Management
            </h3>
            <div className="skill-items">
              {skills.business.items.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;