import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBeasiswaById } from '../services/api'; // Fungsi fetch dari api.js
import DetailHeroSection from '../components/DetailHeroSection'; // Komponen detail hero section

const DetailBeasiswa = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [beasiswa, setBeasiswa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const data = await getBeasiswaById(id);
        setBeasiswa(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div>Memuat detail...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <DetailHeroSection variant="beasiswa" data={beasiswa} />
      
      {/* ... Sisa konten halaman detail (syarat, dokumen, dll.) ... */}
      <div className="container my-5">
        <h2>Syarat & Ketentuan</h2>
        {/* Render sisa data beasiswa di sini */}
      </div>
    </div>
  );
};

export default DetailBeasiswa;