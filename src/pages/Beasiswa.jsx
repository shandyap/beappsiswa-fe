import React, { useEffect, useState } from 'react';
import PagesHeroSection from '../components/PagesHeroSection';
import BeasiswaList from '../components/beasiswa/BeasiswaList';
import { getAllBeasiswa } from '../services/api';

const Beasiswa = () => {
  const [beasiswaData, setBeasiswaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeasiswaData = async () => {
      try {
        setLoading(true);
        const data = await getAllBeasiswa();
        setBeasiswaData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeasiswaData();
  }, []);

  return (
    <div>
      <PagesHeroSection
        variant="beasiswa"
        title="Temukan Beasiswa Impianmu"
        highlightedText="Beasiswa"
        subtitle="Jelajahi berbagai peluang beasiswa di dalam dan luar negeri untuk mendukung pendidikanmu"
        placeholderText="Cari beasiswa"
      />
      <div className="container my-5">
        {loading && <div>Memuat data beasiswa... ⏳</div>}
        {error && <div className="text-danger">Error: {error} 😥</div>}
        {!loading && !error && (
          <BeasiswaList items={beasiswaData} />
        )}
      </div>
    </div>
  );
};

export default Beasiswa;