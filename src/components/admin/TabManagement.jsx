import {React, useState, useEffect, useMemo} from 'react';
import BeasiswaTable from './BeasiswaTable';
import PerlombaanTable from './PerlombaanTable';
import TabNavigation from '../TabNavigation';
import { getAllBeasiswa, getAllLomba, deleteBeasiswaById, deleteLombaById } from '../../services/api';

const TabManagement = ({
  refreshTrigger, 
  onEditBeasiswa, 
  onEditPerlombaan, 
  onDataRefresh,
  searchTerm,
}) => {

  const [allScholarships, setAllScholarships] = useState([]);
  const [allCompetitions, setAllCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDeleteBeasiswa = async (id) => {
    if (window.confirm('Yakin ingin menghapus Beasiswa ini?')) {
      try {
        await deleteBeasiswaById(id);
        alert('Beasiswa berhasil dihapus.');
        onDataRefresh(); // Panggil fungsi refresh
      } catch (error) {
        alert('Gagal menghapus: ' + error.message);
      }
    }
  };

  // Fetch data
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const beasiswa = await getAllBeasiswa();
        const lomba = await getAllLomba();
        setAllScholarships(beasiswa);
        setAllCompetitions(lomba);
      } catch (error) {
        console.error("Gagal memuat data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [refreshTrigger]);

  // Logika untuk filter dan paginasi (menggunakan useMemo untuk efisiensi)
  const filteredScholarships = useMemo(() => {
    return allScholarships.filter(item =>
      item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allScholarships, searchTerm]);

  const filteredCompetitions = useMemo(() => {
    return allCompetitions.filter(item =>
      item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allCompetitions, searchTerm]);

  // "Memotong" data yang sudah difilter untuk halaman saat ini
  const paginatedScholarships = filteredScholarships.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginatedCompetitions = filteredCompetitions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
    setCurrentPage(1); // Reset ke halaman pertama setiap kali mencari
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleDeletePerlombaan = async (id) => {
    if (window.confirm('Yakin ingin menghapus Lomba ini?')) {
      try {
        await deleteLombaById(id);
        alert('Lomba berhasil dihapus.');
        onDataRefresh(); // Panggil fungsi refresh
      } catch (error) {
        alert('Gagal menghapus: ' + error.message);
      }
    }
  };

  const tabs = [
    {
      id: 'beasiswa',
      label: 'Beasiswa',
      content: loading ? <p className="loading-text">Memuat...</p> : 
        <BeasiswaTable
          scholarships={paginatedScholarships} // <-- Gunakan data paginasi
          onEdit={onEditBeasiswa}
          onDelete={handleDeleteBeasiswa}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredScholarships.length} // Total dari data yang terfilter
          onPageChange={handlePageChange}
        />
    },
    {
      id: 'perlombaan',
      label: 'Perlombaan',
      content: loading ? <p className="loading-text">Memuat...</p> : 
        <PerlombaanTable
          competitions={paginatedCompetitions} // <-- Gunakan data paginasi
          onEdit={onEditPerlombaan}
          onDelete={handleDeletePerlombaan}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredCompetitions.length} // Total dari data yang terfilter
          onPageChange={handlePageChange}
        />
    }
  ];

  return (
    <div className="management-section mt-4">
      <TabNavigation tabs={tabs} variant="dashboard" />
    </div>
  );
};

export default TabManagement;