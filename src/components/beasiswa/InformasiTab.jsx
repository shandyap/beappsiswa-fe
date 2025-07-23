import React from 'react';
import {formatDateDetailHero} from '../../utils/index';
import CtaCard from '../CtaCard';
import FooterContactBar from '../FooterContactBar';

const InformasiTab = ({ data }) => {
  const scholarship = data?.scholarship || {};
  const timeline = scholarship.timeline || {};

  const jenjangLabels = {
  'SD': 'Sekolah Dasar',
  'SMP': 'Sekolah Menengah Pertama',
  'SMA': 'Sekolah Menengah Atas',
  'D1': 'Diploma 1',
  'D2': 'Diploma 2',
  'D3': 'Diploma 3',
  'D4': 'Diploma 4',
  'S1': 'Sarjana',
  'S2': 'Magister',
  'S3': 'Doktoral'
 };
 
    return (
    <div className='informasi-tab'>
      {/* Bagian Bidang Studi */}
      <div className="detail-section">
        <h2>Bidang Studi</h2>
        <div className="tags-container-detail">
          {scholarship.bidang_studi?.map((bidang, index) => (
            <span key={index} className="tag-item">{bidang}</span>
          ))}
        </div>
      </div>

      {/* Bagian Jenjang Pendidikan */}
      <div className="detail-section alternate">
        <h2>Jenjang Pendidikan</h2>
        <ul>
        {scholarship.tingkat_pendidikan?.map((jenjang, index) => (
            <li key={index} className="checklist-item">
            <span className="checklist-icon">✔️</span>
            {/* Panggil label dari objek, berikan fallback jika tidak ada */}
            {`Program ${jenjangLabels[jenjang] || jenjang} (${jenjang})`}
            </li>
        ))}
        </ul>
      </div>
      {/* Bagian Durasi */}
      <div className="detail-section green">
        <h2>Durasi</h2>
        <div className="checklist-item">
          {scholarship.durasi}
        </div>
      </div>
      {/* Bagian Lokasi */}
      <div className="detail-section orange">
        <h2>Lokasi</h2>
        <div className="lokasi-container">
          {scholarship.lokasi?.map((lokasi, index) => (
             <div key={index} className="lokasi-item">
                {lokasi}
             </div>
          ))}
        </div>
      </div>
      {/* Bagian Kuota Penerima */}
      <div className="detail-section">
        <h2>Kuota Penerimaan</h2>
        <div className="checklist-item">
          {scholarship.jumlah_pendaftar} peserta
        </div>
      </div>

      {/* Bagian Benefit */}
      <div className="detail-section">
        <h2>Benefit</h2>
        <ul>
          {scholarship.cakupan?.map((item, index) => (
            <li key={index} className="checklist-item">
              <span className="checklist-icon">✅</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <CtaCard link={scholarship.link_pendaftaran}>
        <p>Pendaftaran Dibuka: <strong>{formatDateDetailHero(timeline.pendaftaran_mulai)}</strong></p>
        <p>Pendaftaran Ditutup: <strong>{formatDateDetailHero(timeline.pendaftaran_berakhir)}</strong></p>
      </CtaCard>
      <FooterContactBar kontak={scholarship.kontak} />
    </div>
  );
};

export default InformasiTab;