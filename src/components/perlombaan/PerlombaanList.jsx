import React from 'react';
import PerlombaanCard from './PerlombaanCard';

const PerlombaanList = ({ items }) => {
  return (
    <div className="perlombaan-list-container">
      {items.map((lomba, index) => (
        <PerlombaanCard 
          key={lomba.id} 
          data={lomba} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default PerlombaanList;