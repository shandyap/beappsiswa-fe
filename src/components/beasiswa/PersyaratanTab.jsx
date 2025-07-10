import React from 'react';
import CtaCard from '../CtaCard';
import FooterContactBar from '../FooterContactBar';

const PersyaratanTab = ({ data }) => {
  const scholarship = data?.scholarship || {};
  const kontak = scholarship.kontak || {};

  return (
    <div>
      {/* Bagian Syarat Ketentuan */}
      <div className="detail-section">
        <h2>Syarat Ketentuan</h2>
        <ul>
          {scholarship.syarat_ketentuan?.map((syarat, index) => (
            <li key={index} className="checklist-item">
              <span className="checklist-icon">✅</span>
              {syarat}
            </li>
          ))}
        </ul>
      </div>

      {/* Bagian Dokumen yang Dibutuhkan */}
      <div className="detail-section alternate">
        <h2>Dokumen yang Dibutuhkan</h2>
        <ul>
          {scholarship.dokumen_dibutuhkan?.map((dokumen, index) => (
            <li key={index} className="checklist-item">
              <span className="checklist-icon">✔️</span>
              {dokumen}
            </li>
          ))}
        </ul>
      </div>
      <CtaCard link={scholarship.link_pendaftaran}>
        <p>Email: <a href={`mailto:${scholarship.kontak.email}`} className="cta-link">{scholarship.kontak.email}</a></p>
        <p>Nomor: {kontak.telepon}</p>
      </CtaCard>
      <FooterContactBar kontak={scholarship.kontak} />
    </div>
  );
};

export default PersyaratanTab;