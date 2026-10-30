import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { realisations } from '../../data/portfolioData';
import './Realisations.css';

const Realisations = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  // Met à jour le point actif et l'état des flèches pendant le défilement
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0) : 1;
    setActive(Math.round(track.scrollLeft / step));
    setEdges({
      start: track.scrollLeft <= 2,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
    });
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('resize', onScroll);
    return () => window.removeEventListener('resize', onScroll);
  }, []);

  const goTo = (index) => {
    const card = trackRef.current?.children[index];
    if (card) trackRef.current.scrollTo({ left: card.offsetLeft - trackRef.current.offsetLeft, behavior: 'smooth' });
  };

  const scrollBy = (direction) => {
    const track = trackRef.current;
    track?.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section id="realisations" className="realisations">
      <div className="container">
        <h2 className="section-title">Réalisations</h2>

        <div className="realisations-carousel">
          <div className="realisations-track" ref={trackRef} onScroll={onScroll}>
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

          <div className="carousel-nav">
            <button type="button" className="carousel-arrow" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label="Projets précédents">
              <FaChevronLeft />
            </button>
            <div className="carousel-dots">
              {realisations.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  className={`carousel-dot${i === active ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Aller au projet ${item.title}`}
                />
              ))}
            </div>
            <button type="button" className="carousel-arrow" onClick={() => scrollBy(1)} disabled={edges.end} aria-label="Projets suivants">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
