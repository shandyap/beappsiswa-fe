import React from 'react';
import HeroSection from '../components/HeroSectionComponents'; // Sesuaikan path
import { Container, Nav } from 'react-bootstrap';
import BeasiswaListComponents from '../components/BeasiswaListComponent'; // Sesuaikan path

const Beasiswa = () => {
  return (
    <div>
      <HeroSection 
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