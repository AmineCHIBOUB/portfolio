import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-company">{project.company}</span>
          <span className="project-period">{project.period}</span>
          <span className="project-location">{project.location}</span>
        </div>
      </div>

      <div className="project-context">
        <p>{project.context}</p>
      </div>

      <div className="project-missions">
        <h4>Missions</h4>
        <ul>
          {project.missions.map((mission, index) => (
            <li key={index}>{mission}</li>
          ))}
        </ul>
      </div>

      <div className="project-result">
        <h4>Résultat</h4>
        <p className="result-highlight">{project.result}</p>
      </div>

      <div className="project-stack">
        <h4>Stack technique</h4>
        <div className="stack-tags">
          {project.stack.map((tech, index) => (
            <span key={index} className="badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;