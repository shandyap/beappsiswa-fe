import React, { useEffect, useState } from 'react';
import PagesHeroSection from '../components/PagesHeroSection';
import BeasiswaList from '../components/beasiswa/BeasiswaList';
import { getAllBeasiswa } from '../services/api';
import { useSearchParams } from 'react-router-dom'; 
import EmptyState from '../components/EmptyState'; // Import komponen EmptyState
import Pagination from '../components/Pagination';
const Beasiswa = () => {
  const [allBeasiswa, setAllBeasiswa] = useState([]);
  const [filteredBeasiswa, setFilteredBeasiswa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromUrl = searchParams.get('title') || '';

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  // --- 3. Logika untuk memotong data sesuai halaman ---
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  // currentItems sekarang berisi 8 item yang akan ditampilkan
  const currentItems = filteredBeasiswa.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    const fetchBeasiswaData = async () => {
      try {
        setLoading(true);
        const data = await getAllBeasiswa();
        setAllBeasiswa(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeasiswaData();
  }, []);

  useEffect(() => {
    // Filter data berdasarkan keyword dari URL
    const filtered = allBeasiswa.filter(item =>
      item.judul.toLowerCase().includes(keywordFromUrl.toLowerCase())
    );
    setFilteredBeasiswa(filtered); 
  }, [keywordFromUrl, allBeasiswa]); 

  const handleSearch = (keyword) => {
    setSearchParams({ title: keyword });
    setCurrentPage(1); // Reset ke halaman 1 setiap kali ada pencarian baru
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PagesHeroSection
        variant="beasiswa"
        title="Temukan Beasiswa Impianmu"
        highlightedText="Beasiswa"
        subtitle="Jelajahi berbagai peluang beasiswa di dalam dan luar negeri untuk mendukung pendidikanmu"
        placeholderText="Cari beasiswa"
        onSearch={handleSearch}
      />
      <div className="container my-5">
        {loading && <div className='loading-text'>Memuat data beasiswa... ⏳</div>}
        {error && <div className="text-danger">Error: {error} 😥</div>}
        {!loading && !error && (
          filteredBeasiswa.length > 0 ? (
            <>
              <BeasiswaList items={currentItems} />
              
              <Pagination 
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={filteredBeasiswa.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          ) : (<EmptyState type="Beasiswa" keyword={keywordFromUrl} />)
        )}
      </div>
    </div>
  );
};

export default Beasiswa;