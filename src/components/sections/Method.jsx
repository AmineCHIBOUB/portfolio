import React from 'react';
import { method } from '../../data/portfolioData';
import './Method.css';

const Method = () => {
  return (
    <section id="method" className="method">
      <div className="container">
        <h2 className="section-title">Comment je travaille</h2>
        <p className="method-intro">
          Je suis les projets ERP de bout en bout, avec un pied dans le métier et un pied dans la technique.
        </p>

        <ol className="method-steps">
          {method.map((item, index) => (
            <li key={item.step} className="method-step card">
              <span className="method-number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="method-title">{item.step}</h3>
              <p className="method-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Method;
