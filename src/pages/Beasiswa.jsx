import React, { useEffect, useState } from 'react';
import PagesHeroSection from '../components/PagesHeroSection';
import BeasiswaList from '../components/beasiswa/BeasiswaList';
import { getAllBeasiswa } from '../services/api';
import { useSearchParams } from 'react-router-dom'; 
import EmptyState from '../components/EmptyState'; // Import komponen EmptyState

const Beasiswa = () => {
  const [allBeasiswa, setAllBeasiswa] = useState([]);
  const [filteredBeasiswa, setFilteredBeasiswa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromUrl = searchParams.get('title') || '';

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

  // Fungsi yang akan dipanggil oleh SearchBar untuk mengubah URL
  const handleSearch = (keyword) => {
    setSearchParams({ title: keyword });
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
        {loading && <div>Memuat data beasiswa... ⏳</div>}
        {error && <div className="text-danger">Error: {error} 😥</div>}
        {!loading && !error && (
          filteredBeasiswa.length > 0 ? (
          <BeasiswaList items={filteredBeasiswa} />
          ) : (<EmptyState type="Beasiswa" keyword={keywordFromUrl} />)
        )}
      </div>
    </div>
  );
};

export default Beasiswa;