// src/components/perlombaan/PerlombaanCard.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDateLomba } from '../../utils';
const PerlombaanCard = ({ data, index }) => {
  const colorThemes = ['beasiswa', 'perlombaan', 'accent'];
  const theme = colorThemes[index % colorThemes.length];

  const { day, monthYear } = formatDateLomba(data.timeline?.pendaftaran_selesai);

  const hadiahUtama = data.hadiah?.[0]?.hadiah || 'Lihat Detail';

  return (
    <div className={`card-lomba ${theme}`}>
      <div className={`date-section ${theme}`}>
        <div className="day">{day}</div>
        <div className="month-year">{monthYear}</div>
      </div>
      
      <div className="info-section">
        <div className="tags-container">
          {data.kategori.map((kat, i) => (
            <span key={i} className={`tag ${theme}`}>{kat}</span>
          ))}
        </div>
        <h3 className="card-title">{data.judul}</h3>
        <p className="card-description">Hadiah Utama: {hadiahUtama}</p>
        <Link to={`/lomba/${data.id}`}>
          <Button className={`btn-card ${theme}`}>Lihat Detail</Button>
        </Link>
      </div>
    </div>
  );
};

export default PerlombaanCard;