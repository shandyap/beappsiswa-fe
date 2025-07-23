import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { formatDateDetailHero } from '../utils'; 

const DetailHeroSection = ({ variant, data }) => {
  if (!data) {
    return null; 
  }

  const isBeasiswa = variant === 'beasiswa';
  let iconElement;

  if (isBeasiswa) {
    const beasiswaIconPath = '/assets/icons/beasiswa-cap.svg';
    iconElement = <img src={beasiswaIconPath} alt="Beasiswa Icon" className="hero-detail-icon" />;
  } else {
    const lombaIconPath = '/assets/icons/lomba-trophy.svg';
    iconElement = <img src={lombaIconPath} alt="Perlombaan Icon" className="hero-detail-icon" />;
  }

  const judul = isBeasiswa ? data.scholarship.judul : data.competition.judul;
  const deskripsi = isBeasiswa ? data.scholarship.deskripsi : data.competition.deskripsi;
  const jenis = isBeasiswa ? data.scholarship.jenis_beasiswa : data.competition.jenis_lomba;
  const penyelenggara = isBeasiswa ? data.scholarship.penyelenggara : data.competition.penyelenggara;
  const deadline = isBeasiswa ? data.scholarship.timeline?.pendaftaran_berakhir : data.competition.timeline?.pendaftaran_selesai;
 
  
  return (
    <div className={`hero-detail ${variant}`}>
    <Container>
        <div className="hero-detail-content">
          <div className="info-section">
            <h1 className="hero-detail-title">{judul}</h1>
            <p className="hero-detail-description">{deskripsi}</p>
            <div className={`hero-detail-tags ${variant}`}>
              <span className="tag">{penyelenggara}</span>
              <span className="tag">{jenis}</span>
              <span className="tag">Deadline: {formatDateDetailHero(deadline)}</span>
            </div>
          </div>
          <div className="icon-section">
            {iconElement}
          </div>
        </div>
    </Container>
    </div>
  );
};

DetailHeroSection.propTypes = {
  variant: PropTypes.oneOf(['beasiswa', 'perlombaan']).isRequired,
  data: PropTypes.object,
};

export default DetailHeroSection;