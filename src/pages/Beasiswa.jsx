import React from 'react';
import PagesHeroSection from '../components/PagesHeroSection'; // Sesuaikan path
import { Container, Nav } from 'react-bootstrap';
import BeasiswaListComponents from '../components/beasiswa/BeasiswaList'; // Sesuaikan path

const Beasiswa = () => {
  return (
    <div>
      <PagesHeroSection 
        variant="beasiswa"
        title="Temukan Beasiswa Impianmu"
        highlightedText="Beasiswa"
        subtitle="Jelajahi berbagai peluang beasiswa di dalam dan luar negeri untuk mendukung pendidikanmu"
        placeholderText="Cari beasiswa"
      />
      <BeasiswaListComponents />
      
    </div>
  );
};

export default Beasiswa;