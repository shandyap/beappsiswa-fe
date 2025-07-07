import React from 'react';
import BeasiswaCard from './BeasiswaCard';

const BeasiswaList = ({ items }) => {
  return (
    <div className="beasiswa-list-container">
      {items.map((beasiswa, index) => (
        <BeasiswaCard
          key={beasiswa.id}
          data={beasiswa}
          index={index}
        />
      ))}
    </div>
  );
};

export default BeasiswaList;