import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function SearchBar({ onSearch, placeholderText, className }) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get('judul') || '';
  const [keyword, setKeyword] = useState(initialKeyword);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSearchParams({ judul: keyword }); 
    onSearch(keyword); 
  };

  useEffect(() => {
    const urlKeyword = searchParams.get('judul') || '';
    if (urlKeyword !== keyword) {
      setKeyword(urlKeyword);
    }
  }, [searchParams]);

  const containerClassName = `search-bar-container ${className || ''}`;

  return (
    <form className={containerClassName} onSubmit={handleSubmit}>
      <input 
        type="search" 
        className="search-input" 
        placeholder={placeholderText}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <Button type="submit" className="btn-custom-accent">
        Cari
      </Button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SearchBar;