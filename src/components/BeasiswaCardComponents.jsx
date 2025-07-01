// src/components/BeasiswaCard/BeasiswaCard.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

const BeasiswaCardComponents = ({ data, index }) => {
  // Array yang mendefinisikan urutan tema warna kita
  const colorThemes = ['beasiswa', 'perlombaan', 'accent'];
  
  // LOGIKA KUNCI: Gunakan operator modulo (%) untuk membuat siklus
  // 0 % 3 = 0 -> tema 'beasiswa'
  // 1 % 3 = 1 -> tema 'perlombaan'
  // 2 % 3 = 2 -> tema 'accent'
  // 3 % 3 = 0 -> kembali ke tema 'beasiswa'
  const theme = colorThemes[index % colorThemes.length];

  return (
    // Terapkan class tema ke elemen card utama
    <div className={`card-beasiswa ${theme}`}>
      <div className="card-header">
        {/* Terapkan class tema ke tag jenjang */}
        <div className="tags-container">
            {/* Lakukan mapping pada data.jenjang */}
            {data.jenjang.map((level, index) => (
            <span key={index} className={`tag ${theme}`}>
                {level}
            </span>
            ))}
        </div>
        <span className="deadline">Deadline: {data.deadline}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.nama}</h3>
        <p className="card-description">{data.deskripsi}</p>
      </div>
      <div className="card-footer">
        {/* Terapkan class tema ke tombol */}
        <Button className={`btn-card ${theme}`}>Lihat Beasiswa</Button>
      </div>
    </div>
  );
};

export default BeasiswaCardComponents;