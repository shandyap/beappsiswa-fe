import React from 'react';
import { formatCurrency } from '../../utils'; // Pastikan ini sesuai dengan utilitas formatCurrency Anda


const InformasiTab = ({ data }) => {
  const competition = data?.competition || {};

  return (
    <div>
      {/* Tema Lomba */}
      <div className="detail-section">
        <h2 className='text-center'>Tema Lomba</h2>
        <div className="info-box green text-center">{competition.tema}</div>
      </div>

      {/* Tingkat */}
      <div className="detail-section green">
        <h2>Tingkat</h2>
        <div className="info-box">{competition.tingkat}</div>
      </div>

      {/* Kategori Peserta */}
      <div className="detail-section purple">
        <h2>Kategori Peserta</h2>
        <div className="info-box">
          <ul>
            {competition.kategori?.map((kat, index) => (
              <li key={index}>{kat}</li>
            ))}
          </ul>
          <p className="mt-2">{competition.target_peserta} berusia {competition.batas_usia}</p>
        </div>
      </div>

      {/* Lokasi */}
      <div className="detail-section orange">
        <h2>Lokasi</h2>
        <div className="info-box checklist-item">
            <span className="checklist-icon">✔️</span>
            {competition.lokasi}
        </div>
      </div>

      {/* Detail Teknis */}
      <div className="detail-section">
        <div className="detail-grid-3">
          <div className="info-box red">
            <strong>Maksimal Anggota Per Tim</strong>
            <p>{competition.maksimal_anggota} Orang</p>
          </div>
          <div className="info-box red">
            <strong>Biaya Pendaftaran</strong>
            <p>{formatCurrency(competition.biaya_pendaftaran)}</p>
          </div>
          <div className="info-box red">
            <strong>Total Kuota</strong>
            <p>{competition.jumlah_pendaftar} Orang</p>
          </div>
        </div>
      </div>

      {/* Hadiah */}
      <div className="detail-section">
        <h2 className='text-center'>Hadiah</h2>
        <div className="detail-grid-3">
            {competition.hadiah?.map(item => (
                <div key={item.id} className="info-box orange">
                    <strong>{item.juara}</strong>
                    <p>{item.hadiah}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InformasiTab;