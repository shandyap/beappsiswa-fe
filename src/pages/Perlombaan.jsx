import React from 'react';
import HeroSection from '../components/HeroSectionComponents'; // Sesuaikan path
import PerlombaanList from '../components/PerlombaanList';

const Perlombaan = () => {
  return (
    <div>
      <HeroSection 
        variant="perlombaan"
        title="Kembangkan Potensimu"
        highlightedText="Potensimu"
        subtitle="Temukan berbagai perlombaan menarik untuk mengasah kemampuan dan meraih prestasi"
        placeholderText="Cari perlombaan"
      />
      <PerlombaanList/>
    </div>
  );
};

export default Perlombaan;