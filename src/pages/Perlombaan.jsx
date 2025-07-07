import React from 'react';
import PagesHeroSection from '../components/PagesHeroSection'; // Sesuaikan path
import PerlombaanList from '../components/perlombaan/PerlombaanList'; // Sesuaikan path


const Perlombaan = () => {
  return (
    <div>
      <PagesHeroSection 
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