import React from 'react';
import './Background.css';

const BEAMS = 8;

// Fond animé : grille, halos lumineux et faisceaux laser
const Background = () => {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      {Array.from({ length: BEAMS }).map((_, i) => (
        <span key={i} className={`bg-beam bg-beam-${i + 1}`} />
      ))}
    </div>
  );
};

export default Background;
