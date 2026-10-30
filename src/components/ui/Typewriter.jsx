import React, { useEffect, useState } from 'react';
import './Typewriter.css';

// Écrit chaque texte lettre par lettre, le laisse affiché, l'efface puis passe au suivant
const Typewriter = ({ words, typeSpeed = 70, deleteSpeed = 35, pause = 1800 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduceMotion || !words.length) return undefined;
    const word = words[index % words.length];

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    if (deleting && text === '') delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduceMotion]);

  if (reduceMotion) return <span className="typewriter-text">{words.join(' • ')}</span>;

  return (
    <span className="typewriter" aria-label={words.join(', ')}>
      <span className="typewriter-text" aria-hidden="true">{text}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
};

export default Typewriter;
