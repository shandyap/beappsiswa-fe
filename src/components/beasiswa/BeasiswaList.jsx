import React from 'react';
import BeasiswaCard from './BeasiswaCard';
import { useIntersectionObserver } from '../../hooks/UseIntersectionObserver';

const AnimatedCard = ({ children, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className={`card-animation-wrapper ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

const BeasiswaList = ({ items }) => {
  return (
    <div className="beasiswa-list-container">
      {items.map((beasiswa, index) => (
        <AnimatedCard key={beasiswa.id} index={index}>
          <BeasiswaCard 
            data={beasiswa} 
            index={index} 
          />
        </AnimatedCard>
      ))}
    </div>
  );
};

export default BeasiswaList;