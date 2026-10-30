import React, { useEffect, useRef, useState } from 'react';
import { stats } from '../../data/portfolioData';
import './Stats.css';

// Compte de 0 jusqu'à la valeur quand le chiffre devient visible
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const duration = 1500;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="stat-value">{count}{suffix}</span>;
};

const Stats = () => {
  return (
    <section id="stats" className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
