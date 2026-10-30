import React, { useRef, useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';
import './Projects.css';

const ANIMATION_MS = 700;

// Expériences présentées comme un paquet de cartes : la carte du dessus est lisible,
// les suivantes dépassent derrière. Les flèches font tourner le paquet.
const Projects = () => {
  const [order, setOrder] = useState(projects.map((_, i) => i));
  const [moving, setMoving] = useState(null); // { index, direction: 'out' | 'in' }

  const next = () => {
    if (moving) return;
    const front = order[0];
    setMoving({ index: front, direction: 'out' });
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setMoving(null);
    }, ANIMATION_MS);
  };

  const previous = () => {
    if (moving) return;
    const last = order[order.length - 1];
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
    setMoving({ index: last, direction: 'in' });
    setTimeout(() => setMoving(null), ANIMATION_MS);
  };

  const goTo = (index) => {
    if (moving || order[0] === index) return;
    const position = order.indexOf(index);
    setOrder((o) => [...o.slice(position), ...o.slice(0, position)]);
    setMoving({ index, direction: 'in' });
    setTimeout(() => setMoving(null), ANIMATION_MS);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); previous(); }
  };

  // Glisser au doigt (mobile) : vers la gauche ou le haut = suivante, vers la droite ou le bas = précédente
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
    const forward = Math.abs(dx) > Math.abs(dy) ? dx < 0 : dy < 0;
    forward ? next() : previous();
  };

  const current = order[0];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Expériences professionnelles</h2>

        <div className="deck-layout">
          <div className="deck" tabIndex={0} onKeyDown={onKeyDown} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-roledescription="carrousel" aria-label="Expériences professionnelles">
            {projects.map((project, index) => {
              const depth = order.indexOf(index);
              const anim = moving?.index === index ? `deck-${moving.direction}` : '';
              return (
                <div
                  key={project.id}
                  className={`deck-card depth-${Math.min(depth, 3)} ${anim}`}
                  style={{ zIndex: projects.length - depth }}
                  aria-hidden={depth !== 0}
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>

          <div className="deck-controls">
            <button type="button" className="deck-arrow" onClick={previous} aria-label="Expérience précédente">
              <FaChevronUp />
            </button>
            <span className="deck-counter">
              {current + 1} / {projects.length}
            </span>
            <button type="button" className="deck-arrow" onClick={next} aria-label="Expérience suivante">
              <FaChevronDown />
            </button>
          </div>
        </div>

        <div className="deck-timeline">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`deck-step${index === current ? ' active' : ''}`}
              onClick={() => goTo(index)}
            >
              <span className="deck-step-company">{project.company}</span>
              <span className="deck-step-period">{project.period}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
