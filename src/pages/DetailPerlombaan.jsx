import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLombaById } from '../services/api'; 
import DetailHeroSection from '../components/DetailHeroSection'; 
import TabNavigation from '../components/TabNavigation';
import PersyaratanTab from '../components/perlombaan/PersyaratanTab';
import InformasiTab from '../components/perlombaan/InformasiTab';

const DetailPerlombaan = () => {
  const { id } = useParams(); 
  const [lomba, setLomba] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const data = await getLombaById(id);
        setLomba(data);
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
      content: <InformasiTab data={lomba} />
    },
    {
      id: 'persyaratan',
      label: 'Persyaratan',
      content: <PersyaratanTab data={lomba} />
    }
  ];

  if (loading) return <div className='loading-text'>Memuat Detail Lomba</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <DetailHeroSection variant="perlombaan" data={lomba} />
      <div className="container my-5">
        <TabNavigation tabs={tabs} variant="perlombaan" />
      </div>
    </div>
  );
};

export default DetailPerlombaan;