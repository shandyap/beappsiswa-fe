import React, { useEffect, useState } from 'react';
import HeroBeranda from '../components/beranda/HeroBeranda';
import SectionBeasiswaTerbaru from '../components/beranda/SectionBeasiswaTerbaru';
import SectionPerlombaanTerbaru from '../components/beranda/SectionPerlombaanTerbaru';
import AdvertiseSection from '../components/beranda/AdvertiseSection';
import { Container } from 'react-bootstrap';
import { getAllBeasiswa, getAllLomba } from '../services/api'; 

const Beranda = () => {
  // State untuk data
  const [beasiswaData, setBeasiswaData] = useState([]);
  const [lombaData, setLombaData] = useState([]);
  
  // State untuk loading dan error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        setLoading(true);
        const [beasiswaRes, lombaRes] = await Promise.all([
          getAllBeasiswa(),
          getAllLomba()
        ]);
        
        setBeasiswaData(beasiswaRes.slice(0, 3));
        setLombaData(lombaRes.slice(0, 3));

      } catch (err) {
        setError("Gagal memuat data untuk beranda. Silakan coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageData();
  }, []);

  return (
    <>
      <HeroBeranda />
      <Container className="my-5">
        <SectionBeasiswaTerbaru 
          scholarships={beasiswaData} 
          loading={loading}
          error={error}
        />
        <SectionPerlombaanTerbaru 
          competitions={lombaData}
          loading={loading}
          error={error}
        />
        <AdvertiseSection />
      </Container>
    </>
  );
};

export default Beranda;