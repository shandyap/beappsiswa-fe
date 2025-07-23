import React from 'react';
import { Button } from 'react-bootstrap';
import './beranda.css'; 

const AdvertiseSection = () => {
  return (
    <div className="advertise-section text-center">
      <h2>Publikasikan Event Anda di BeAppsiswa!</h2>
      <p className="lead">
        Jangkau ribuan pelajar dan mahasiswa di seluruh Indonesia.
        Daftarkan beasiswa atau perlombaan Anda sekarang juga.
      </p>
      <div className="advertise-buttons">
        <Button 
          href="mailto:shandylatoz851@gmail.com" 
          className="btn-hero btn-hero-primary" 
        >
          Hubungi via Email
        </Button>
        <Button 
          href="https://wa.me/6289601990940" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-hero btn-hero-secondary" 
        >
          Chat via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default AdvertiseSection;