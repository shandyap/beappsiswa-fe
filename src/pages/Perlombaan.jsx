// src/pages/Perlombaan.jsx
import React, { useState, useEffect } from 'react';
import PagesHeroSection from '../components/PagesHeroSection';
import PerlombaanList from '../components/perlombaan/PerlombaanList';
import { getAllLomba } from '../services/api'; 
import { useSearchParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState'; 
import Pagination from '../components/Pagination';

const Perlombaan = () => {
  const [allLomba, setAllLomba] = useState([]);
  const [filteredLomba, setFilteredLomba] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromUrl = searchParams.get('title') || '';

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 4;
    
    // Logika untuk memotong data sesuai halaman
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredLomba.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(() => {
    const fetchLombaData = async () => {
      try {
        setLoading(true);
        const data = await getAllLomba();
        setAllLomba(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLombaData();
  }, []);

  useEffect(() => {
    const filtered = allLomba.filter(item => 
      item.judul.toLowerCase().includes(keywordFromUrl.toLowerCase())
    );
    setFilteredLomba(filtered);
  }, [keywordFromUrl, allLomba]);

  const handleSearch = (keyword) => {
    setSearchParams({ title: keyword });
    setCurrentPage(1);
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PagesHeroSection 
        variant="perlombaan"
        title="Kembangkan Potensimu"
        highlightedText="Potensimu"
        subtitle="Temukan berbagai perlombaan menarik untuk mengasah kemampuan dan meraih prestasi"
        placeholderText="Cari perlombaan"
        onSearch={handleSearch}
      />
      <div className="container my-5">
        {loading && <div className='loading-text'>Memuat data perlombaan... ⏳</div>}
        {error && <div className="text-danger">Error: {error} 😥</div>}
        {!loading && !error && (
          filteredLomba.length > 0 ? (
            <>
              <PerlombaanList items={currentItems} />
              
              <Pagination 
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={filteredLomba.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          ) : (<EmptyState type="Perlombaan" keyword={keywordFromUrl} />)
        )}
      </div>
    </div>
  );
};

export default Perlombaan;