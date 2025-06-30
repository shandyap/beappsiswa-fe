// src/components/HeroSection/HeroSection.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar'; // Import komponen SearchBar


const HeroSection = ({ variant, title, highlightedText, subtitle, placeholderText }) => {
  
  // Memisahkan judul untuk memberi style pada kata yang di-highlight
  const titleParts = title.split(highlightedText);

  // Fungsi untuk menangani pencarian dari komponen SearchBar
  const handleSearch = (searchQuery) => {
    console.log(`Pencarian dimulai di section ${variant} untuk:`, searchQuery);
    // Logika pencarian data akan ditambahkan di sini nanti
  };

  return (
    // className akan menjadi 'hero-section beasiswa' atau 'hero-section perlombaan'
    <section className={`hero-section ${variant}`}>
      <Container>
        <div className="hero-content">
          <h1>
            {titleParts[0]}
            <span className="highlight">{highlightedText}</span>
            {titleParts[1]}
          </h1>
          <p>{subtitle}</p>

          <SearchBar 
            placeholderText={placeholderText}
            onSearch={handleSearch}
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;