import React from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';
import { realisations } from '../../data/portfolioData';
import './Realisations.css';

const Realisations = () => {
  return (
    <section id="realisations" className="realisations">
      <div className="container">
        <h2 className="section-title">Réalisations</h2>

        <div className="realisations-grid">
          {realisations.map((item) => (
            <article key={item.title} className="realisation-card card">
              <div className="realisation-icon"><FaCode /></div>
              <h3 className="realisation-title">{item.title}</h3>
              <p className="realisation-text">{item.description}</p>
              <div className="stack-tags">
                {item.stack.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
              {item.repo ? (
                <a href={item.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline realisation-link">
                  <FaGithub /> Voir le code
                </a>
              ) : (
                <span className="badge realisation-link">Code privé</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;
