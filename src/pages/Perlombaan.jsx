// src/pages/Perlombaan.jsx
import React, { useState, useEffect } from 'react';
import PagesHeroSection from '../components/PagesHeroSection';
import PerlombaanList from '../components/perlombaan/PerlombaanList';
import { getAllLomba } from '../services/api'; // Impor fungsi API

const Perlombaan = () => {
  const [lombaData, setLombaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLombaData = async () => {
      try {
        setLoading(true);
        const data = await getAllLomba();
        setLombaData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLombaData();
  }, []);

  return (
    <div>
      <PagesHeroSection 
        variant="perlombaan"
        title="Kembangkan Potensimu"
        highlightedText="Potensimu"
        subtitle="Temukan berbagai perlombaan menarik untuk mengasah kemampuan dan meraih prestasi"
        placeholderText="Cari perlombaan"
      />
      <div className="container my-5">
        {loading && <div>Memuat data perlombaan... ⏳</div>}
        {error && <div className="text-danger">Error: {error} 😥</div>}
        {!loading && !error && (
          <PerlombaanList items={lombaData} />
        )}
      </div>
    </div>
  );
};

export default Perlombaan;