// src/components/BeasiswaList/BeasiswaList.jsx
import React from 'react';
import BeasiswaCardComponents from '../components/BeasiswaCardComponents';

// Contoh data dummy. Nanti ini bisa diganti dengan data dari API.
const dummyData = [
  { id: 1, jenjang: ['S2', 'S3'], nama: 'Beasiswa Fulbright', deskripsi: 'Program beasiswa prestisius untuk studi pascasarjana di Amerika Serikat.', deadline: '30 Nov 2025' },
  { id: 2, jenjang: ['S2'], nama: 'Beasiswa LPDP', deskripsi: 'Beasiswa penuh untuk studi lanjut di dalam dan luar negeri dari pemerintah Indonesia.', deadline: '15 Des 2025' },
  { id: 3, jenjang: ['S1'], nama: 'Beasiswa Unggulan', deskripsi: 'Diberikan oleh Kemendikbud untuk mahasiswa berprestasi di berbagai jenjang.', deadline: '20 Des 2025' },
  { id: 4, jenjang: ['S3'], nama: 'Beasiswa Eiffel', deskripsi: 'Program beasiswa dari pemerintah Prancis untuk jenjang Magister dan Doktor.', deadline: '05 Jan 2026' },
  { id: 5, jenjang: ['S1'], nama: 'Beasiswa MEXT', deskripsi: 'Beasiswa dari pemerintah Jepang untuk berbagai jenjang studi di universitas Jepang.', deadline: '10 Jan 2026' },
  { id: 6, jenjang: ['S2'], nama: 'Beasiswa Chevening', deskripsi: 'Program beasiswa global dari pemerintah Inggris untuk pemimpin masa depan.', deadline: '12 Jan 2026' },
];

const BeasiswaListComponents = () => {
  return (
    <div className="beasiswa-list-container">
      {dummyData.map((beasiswa, index) => (
        <BeasiswaCardComponents 
          key={beasiswa.id} 
          data={beasiswa} 
          index={index} // KIRIM INDEX KE KOMPONEN CARD
        />
      ))}
    </div>
  );
};

export default BeasiswaListComponents;