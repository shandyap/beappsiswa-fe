import React from 'react';
import { formatDate } from '../../utils'; // Pastikan ini sesuai dengan utilitas formatDate Anda
import { formatDateRange } from '../../utils'; // Pastikan ini sesuai dengan utilitas formatDateRange Anda
import FooterContactBar from '../FooterContactBar';
import CtaCard from '../CtaCard';
import { BsInstagram, BsTiktok, BsYoutube, BsLink45Deg } from 'react-icons/bs';

// Fungsi helper untuk memilih ikon berdasarkan nama platform
const getPlatformIcon = (platform) => {
  const iconProps = { size: 20 }; // Atur ukuran default ikon

  switch (platform.toLowerCase()) {
    case 'instagram':
      return <BsInstagram {...iconProps} />;
    case 'tiktok':
      return <BsTiktok {...iconProps} />;
    case 'youtube':
      return <BsYoutube {...iconProps} />;
    default:
      return <BsLink45Deg {...iconProps} />; // Ikon default jika platform lain
  }
};


const PersyaratanTab = ({ data }) => {
  const competition = data?.competition || {};
  const timeline = competition.timeline || {};

  return (
    <div>
      {/* Syarat Ketentuan */}
      <div className="detail-section green">
        <h2>Syarat Ketentuan</h2>
        <div className="info-box">
          <ul>
            {competition.syarat_ketentuan?.map((syarat, index) => (
              <li key={index} className="checklist-item">
                <span className="checklist-icon">✅</span>
                {syarat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cara Mendaftar */}
      <div className="detail-section purple">
        <h2>Cara Mendaftar</h2>
        <div className="info-box">
          <ul>
            {competition.cara_mendaftar?.map((cara, index) => (
              <li key={index} className="checklist-item">
                <span className="checklist-icon">✔️</span>
                {cara}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Pendaftaran */}
      <div className="detail-section blue">
        <h2>Timeline Pendaftaran</h2>
        <div className="info-box">
          <ul className="timeline-list">
            <li className="timeline-item">
              <span>Mulai Pendaftaran:</span>
              <strong className='timeline-date'>{formatDate(timeline.pendaftaran_mulai)}</strong>
            </li>
            <li className="timeline-item">
              <span>Penutupan Pendaftaran:</span>
              <strong className='timeline-date'>{formatDate(timeline.pendaftaran_selesai)}</strong>
            </li>
            <li className="timeline-item">
              <span>Pengumpulan Karya:</span>
              <strong className='timeline-date'>{formatDate(timeline.pengumpulan_karya)}</strong>
            </li>
            <li className="timeline-item">
              <span>Deadline Pengerjaan:</span>
              <strong className='timeline-date'>{formatDate(timeline.deadline_karya)}</strong>
            </li>
             <li className="timeline-item">
              <span>Penjurian:</span>
              <strong className='timeline-date'>{formatDateRange(timeline.penjurian)}</strong>
            </li>
            <li className="timeline-item">
              <span>Pengumuman:</span>
              <strong className='timeline-date'>{formatDate(timeline.pengumuman)}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-section">
        <h2 className='text-center'>Media & Informasi</h2>
        <div className="media-links-container">
          {competition.media_promosi?.map((media) => (
            <a
              key={media.id}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="media-link-card"
            >
              {getPlatformIcon(media.platform)}
              <span>{media.platform}</span>
            </a>
          ))}
        </div>
      </div>
      <CtaCard link={competition.link_pendaftaran}>
        <p>Email: <a href={`mailto:${competition.kontak.email}`} className="cta-link">{competition.kontak.email}</a></p>
        <p>Nomor: {competition.kontak.whatsapp}</p>
      </CtaCard>
      <FooterContactBar kontak={competition.kontak} />
    </div>
  );
};

export default PersyaratanTab;