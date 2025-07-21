import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './beranda.css';

const CardPerlombaan = ({ data, index }) => {
  const navigate = useNavigate();
  // Data dari API
  const { id, judul, deskripsi, jenis_lomba, timeline, hadiah } = data || {};

  // Logika untuk tema warna yang bergantian
  const colorThemes = ['theme-blue', 'theme-green', 'theme-orange'];
  const theme = colorThemes[index % colorThemes.length];

  // Fungsi untuk memformat tanggal menjadi "30 Juli" dan "2025"
  const formatDeadline = (dateString) => {
    if (!dateString) return { dayMonth: 'N/A', year: '' };
    const date = new Date(dateString);
    const dayMonth = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    const year = date.toLocaleDateString('id-ID', { year: 'numeric' });
    return { dayMonth, year };
  };

  const { dayMonth, year } = formatDeadline(timeline?.pendaftaran_selesai);
  
  // Mengambil hadiah utama
  const hadiahUtama = hadiah?.[0]?.hadiah || 'Lihat Detail';

  return (
    <div className={`custom-card-lomba ${theme}`}>
      <div className="card-header-lomba">
        <span className="deadline-text">DEADLINE</span>
        <span className="deadline-date">{dayMonth}</span>
        <span className="deadline-year">{year}</span>
      </div>
      <div className="card-body-lomba">
        <span className="tag">{jenis_lomba || 'Umum'}</span>
        <h5 className="card-title-lomba">{judul || 'Judul tidak tersedia'}</h5>
        <p className="card-text-lomba">
          {deskripsi?.slice(0, 100) || 'Deskripsi tidak tersedia'}...
        </p>
        <p className="card-hadiah-lomba">
          Hadiah: {hadiahUtama}
        </p>
      </div>
      <div className="card-footer-lomba">
        <Button className="btn-custom" onClick={() => navigate(`/lomba/${id}`)}>
          Lihat Detail
        </Button>
      </div>
    </div>
  );
};

export default CardPerlombaan;