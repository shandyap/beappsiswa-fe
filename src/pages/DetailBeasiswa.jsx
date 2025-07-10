import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBeasiswaById } from '../services/api'; // Fungsi fetch dari api.js
import DetailHeroSection from '../components/DetailHeroSection'; // Komponen detail hero section
import TabNavigation from '../components/TabNavigation';
import PersyaratanTab from '../components/beasiswa/PersyaratanTab';
import InformasiTab from '../components/beasiswa/InformasiTab';

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

    const tabs = [
    {
      id: 'informasi',
      label: 'Informasi',
      content: <InformasiTab data={beasiswa} />
    },
    {
      id: 'persyaratan',
      label: 'Persyaratan',
      content: <PersyaratanTab data={beasiswa} />
    }
  ];
  if (loading) return <div>Memuat detail...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <DetailHeroSection variant="beasiswa" data={beasiswa} />
      <div className="container my-5">
        <TabNavigation tabs={tabs} />
      </div>
    </div>
  );
};

export default DetailBeasiswa;