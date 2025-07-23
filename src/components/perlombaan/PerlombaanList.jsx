import React from 'react';
import PerlombaanCard from './PerlombaanCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

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


const PerlombaanList = ({ items }) => {
  return (
    <div className="perlombaan-list-container">
      {items.map((lomba, index) => (
        <AnimatedCard key={lomba.id} index={index}>
          <PerlombaanCard 
            data={lomba} 
            index={index} 
          />
        </AnimatedCard>
      ))}
    </div>
  );
};

export default PerlombaanList;