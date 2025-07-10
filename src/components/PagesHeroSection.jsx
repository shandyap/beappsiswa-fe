import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar'; // Import komponen SearchBar


const PagesHeroSection = ({ variant, title, highlightedText, subtitle, placeholderText, onSearch }) => {
  
  // Memisahkan judul untuk memberi style pada kata yang di-highlight
  const titleParts = title.split(highlightedText);

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
            onSearch={onSearch}
          />
        </div>
      </Container>
    </section>
  );
};

export default PagesHeroSection;