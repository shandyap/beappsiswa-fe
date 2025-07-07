import React from 'react';
import PerlombaanCard from './PerlombaanCard';

// Contoh data dummy
const dummyData = [
  { id: 1, kategori: 'Teknologi', nama: 'Hackathon Indonesia 2025', hadiah: 'Rp 50 Juta', deadline: '30 Nov 2025' },
  { id: 2, kategori: 'Bisnis', nama: 'Lomba Rencana Bisnis Nasional', hadiah: 'Rp 25 Juta', deadline: '15 Des 2025' },
  { id: 3, kategori: 'Desain', nama: 'Kompetisi Desain UI/UX Web', hadiah: 'Rp 15 Juta', deadline: '20 Des 2025' },
  { id: 4, kategori: 'Teknologi', nama: 'Lomba Cipta Aplikasi Mobile', hadiah: 'Rp 30 Juta', deadline: '05 Jan 2026' },
];

const PerlombaanList = () => {
  return (
    <div className="perlombaan-list-container">
      {dummyData.map((lomba, index) => (
        <PerlombaanCard 
          key={lomba.id} 
          data={lomba} 
          index={index} // KIRIM INDEX
        />
      ))}
    </div>
  );
};

export default PerlombaanList;