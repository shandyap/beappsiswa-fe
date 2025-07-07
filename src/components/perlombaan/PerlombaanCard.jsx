import React from 'react';
import { Button } from 'react-bootstrap';

const PerlombaanCard = ({ data, index }) => {
  // Array tema warna yang sama
  const colorThemes = ['beasiswa', 'perlombaan', 'accent'];
  
  // Logika siklus warna yang sama
  const theme = colorThemes[index % colorThemes.length];

  // Memisahkan tanggal menjadi hari dan bulan-tahun
  const dateParts = data.deadline.split(' ');
  const day = dateParts[0];
  const monthYear = `${dateParts[1]} ${dateParts[2]}`;

  return (
    // Terapkan class tema ke elemen card utama
    <div className={`card-lomba ${theme}`}>
      {/* Sisi Kiri untuk Tanggal */}
      <div className={`date-section ${theme}`}>
        <div className="day">{day}</div>
        <div className="month-year">{monthYear}</div>
      </div>
      
      {/* Sisi Kanan untuk Detail */}
      <div className="info-section">
        <span className={`tag ${theme}`}>{data.kategori}</span>
        <h3 className="card-title">{data.nama}</h3>
        <p className="card-description">Hadiah: {data.hadiah}</p>
        <Button className={`btn-card ${theme}`}>Lihat Detail</Button>
      </div>
    </div>
  );
};

export default PerlombaanCard;