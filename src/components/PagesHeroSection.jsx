import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar'; 

const PagesHeroSection = ({ variant, title, highlightedText, subtitle, placeholderText, onSearch }) => {
  
  const titleParts = title.split(highlightedText);

  return (
    <section className={`hero-section ${variant}`}>
      <Container fluid="md">
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