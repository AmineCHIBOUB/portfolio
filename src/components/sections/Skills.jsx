import React from 'react';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Compétences</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.items.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
