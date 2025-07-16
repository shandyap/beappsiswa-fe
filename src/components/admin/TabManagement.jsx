import {React, useState, useEffect} from 'react';
import BeasiswaTable from './BeasiswaTable';
import PerlombaanTable from './PerlombaanTable';
import TabNavigation from '../TabNavigation';
import { getAllBeasiswa, getAllLomba } from '../../services/api';

const TabManagement = ({refreshTrigger}) => {

  const [scholarshipData, setScholarshipData] = useState([]);
  const [competitionData, setCompetitionData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect akan berjalan saat pertama kali dan setiap kali 'refreshTrigger' berubah
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const beasiswa = await getAllBeasiswa();
        const lomba = await getAllLomba();
        setScholarshipData(beasiswa);
        setCompetitionData(lomba);
      } catch (error) {
        console.error("Gagal memuat data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAllData();
  }, [refreshTrigger]); // <-- Kunci pembaruan otomatis ada di sini

  const tabs = [
    {
      id: 'beasiswa',
      label: 'Beasiswa',
      content: loading ? <p>Memuat...</p> : <BeasiswaTable scholarships={scholarshipData} />
    },
    {
      id: 'perlombaan',
      label: 'Perlombaan',
      content: loading ? <p>Memuat...</p> : <PerlombaanTable competitions={competitionData} />
    }
  ];

  // 2. Gunakan TabNavigation dengan konten yang sudah dibuat
  return (
    <div className="management-section">
      <TabNavigation tabs={tabs} variant="dashboard" />
    </div>
  );
};

export default TabManagement;